import RoomEntity from "./RoomEntity.ts";

export default interface IRoomsRepository {
  save(roomEntity: RoomEntity): void;
  remove(roomName: string): void;
  getById(roomId: string): RoomEntity | undefined;
}
