import RoomEntity, { RoomEntityParams } from "./RoomEntity.ts";

export function roomEntity(params: RoomEntityParams) {
  return new RoomEntity(params);
}
