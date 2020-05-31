import { WebSocket } from "https://deno.land/std/ws/mod.ts";

export type UserEntityParams = {
  userId: string;
  ws: WebSocket;
  name?: string;
  roomId?: string;
};

export default class UserEntity {
  private _id: string;
  private _name: string;
  private _ws: WebSocket;
  private _roomId: string;

  constructor(params: UserEntityParams) {
    this._id = params.userId;
    this._name = params.name || "";
    this._ws = params.ws;
    this._roomId = params.roomId || "";
  }

  public get id() {
    return this._id;
  }

  public get ws() {
    return this._ws;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set roomId(roomId: string) {
    this._roomId = roomId;
  }

  public toJSON() {
    return {
      id: this._id,
      name: this._name,
      roomId: this._roomId,
    };
  }
}
