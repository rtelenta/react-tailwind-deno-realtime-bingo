import { v4 } from "https://deno.land/std/uuid/mod.ts";

export default class IdValueObject {
  private _id: string;

  constructor() {
    this._id = v4.generate();
  }

  public value() {
    return this._id;
  }
}
