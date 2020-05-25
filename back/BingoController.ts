import {
  WebSocket,
  isWebSocketCloseEvent,
} from "https://deno.land/std/ws/mod.ts";

import {
  create_user_use_case,
  update_user_use_case,
  emit_user_list_use_case,
  get_user_by_id_use_case,
  remove_user_by_id_use_case,
} from "./users/factory.ts";

import {
  insert_user_in_room_use_case,
  get_room_by_name_use_case,
  remove_user_from_room_use_case,
} from "./rooms/factory.ts";

export default class BingoController {
  private _currentUserId: string;
  private _ws: WebSocket;

  constructor(ws: WebSocket) {
    this._currentUserId = create_user_use_case.execute(ws).id;
    this._ws = ws;
  }

  public async watch() {
    for await (const data of this._ws) {
      if (isWebSocketCloseEvent(data)) {
        this.deleteCurentUser();
        break;
      }

      const {
        event,
        payload: { name, roomName },
      } = JSON.parse(data as string);

      switch (event) {
        case "join":
          update_user_use_case.execute(this._currentUserId, {
            name,
            roomName,
          });

          insert_user_in_room_use_case.execute(roomName, this._currentUserId);

          const room = get_room_by_name_use_case.execute(roomName);
          if (room) emit_user_list_use_case.execute(room.users);

          break;
      }
    }
  }

  private deleteCurentUser() {
    const user = get_user_by_id_use_case.execute(this._currentUserId);

    if (user) {
      remove_user_from_room_use_case.execute(user.roomName, user.id);
      remove_user_by_id_use_case.execute(user.id);

      const room = get_room_by_name_use_case.execute(user.roomName);
      if (room) emit_user_list_use_case.execute(room.users);
    }
  }
}
