import RoomEntity, { RoomEntityParams } from "./RoomEntity.ts";
import IdValueObject from "./IdValueObject.ts";

export function roomEntity(params: RoomEntityParams) {
  return new RoomEntity(params);
}

export function idValueObject() {
  return new IdValueObject();
}
