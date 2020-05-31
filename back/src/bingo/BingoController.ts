import {
  WebSocket,
  isWebSocketCloseEvent,
} from "https://deno.land/std/ws/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

import joinEventController from "./controllers/joinEventController.ts";
import deleteCurrentUserController from "./controllers/deleteCurrentUserController.ts";
import initUserController from "./controllers/initUserController.ts";
import updateUserNameEventController from "./controllers/updateUserNameEventController.ts";
import createRoomEventController from "./controllers/createRoomEventController.ts";
import { UPDATE_USER_NAME, CREATE_ROOM } from "../config/inputEvents.ts";

export default class BingoController {
  private _currentUserId: string;
  private _ws: WebSocket;

  constructor(ws: WebSocket) {
    this._currentUserId = v4.generate();
    this._ws = ws;
    initUserController(this._currentUserId, this._ws);
  }

  public async watch() {
    for await (const data of this._ws) {
      if (isWebSocketCloseEvent(data)) {
        deleteCurrentUserController(this._currentUserId);
        break;
      }

      const { event, payload } = JSON.parse(data as string);

      this.dispatch(event, payload);
    }
  }

  private dispatch(event: string, payload: any) {
    switch (event) {
      case UPDATE_USER_NAME:
        updateUserNameEventController(this._currentUserId, payload.userName);
        break;

      case CREATE_ROOM:
        createRoomEventController(
          this._currentUserId,
          payload.roomName,
          payload.bet
        );
        break;
    }
  }
}

//updateName
//joinRoom
//CreateRoom
