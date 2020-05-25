import RoomEntity from "./RoomEntity.ts";

export default interface IRoomsRepository {
  save(roomEntity: RoomEntity): void;
  remove(roomName: string): void;
  getByName(roomName: string): RoomEntity | undefined;
}
