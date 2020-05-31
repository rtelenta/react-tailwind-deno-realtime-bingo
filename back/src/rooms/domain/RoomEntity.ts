export type RoomEntityParams = {
  id: string;
  name: string;
  users: string[];
  bet: number;
};

export default class RoomEntity {
  private _id: string;
  private _name: string;
  private _users: string[];
  private _bet: number;

  constructor(params: RoomEntityParams) {
    this._id = params.id;
    this._name = params.name;
    this._users = params.users;
    this._bet = params.bet;
  }

  private calcReward() {
    return this._users.length * this._bet;
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get reward() {
    return this.calcReward();
  }

  public addUser(userId: string) {
    this._users = [userId, ...this._users];
  }

  public removeUser(userId: string) {
    this._users = this._users.filter((_userId) => _userId !== userId);
  }

  public toJSON() {
    return {
      id: this._id,
      name: this._name,
      users: this._users.map((user) => user),
      bet: this._bet,
      reward: this.calcReward(),
    };
  }
}
