import IdValueObject from "./IdValueObject.ts";

export type RoomEntityParams = {
  id: IdValueObject;
  name: string;
  users: string[];
};

export default class RoomEntity {
  private _id: IdValueObject;
  private _name: string;
  private _users: string[];

  constructor(params: RoomEntityParams) {
    this._id = params.id;
    this._name = params.name;
    this._users = params.users;
  }

  public get id() {
    return this._id.value();
  }

  public get name() {
    return this._name;
  }

  public addUser(userId: string) {
    this._users = [userId, ...this._users];
  }

  public removeUser(userId: string) {
    this._users = this._users.filter((_userId) => _userId !== userId);
  }

  public toJSON() {
    return {
      id: this._id.value(),
      name: this._name,
      users: this._users.map((user) => user),
    };
  }
}
