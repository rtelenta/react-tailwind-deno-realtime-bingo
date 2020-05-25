import { WebSocket } from "https://deno.land/std/ws/mod.ts";
import IdValueObject from "./IdValueObject.ts";

export type UserEntityParams = {
  userId: IdValueObject;
  ws: WebSocket;
  name?: string;
  roomName?: string;
};

export default class UserEntity {
  private _id: IdValueObject;
  private _name: string;
  private _ws: WebSocket;
  private _roomName: string;

  constructor(params: UserEntityParams) {
    this._id = params.userId;
    this._name = params.name || "";
    this._ws = params.ws;
    this._roomName = params.roomName || "";
  }

  public get id() {
    return this._id.value();
  }

  public get ws() {
    return this._ws;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set roomName(roomName: string) {
    this._roomName = roomName;
  }

  public toJSON() {
    return {
      id: this._id.value(),
      name: this._name,
      roomName: this._roomName,
    };
  }
}
