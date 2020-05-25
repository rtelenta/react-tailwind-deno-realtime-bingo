import IRoomsRepository from "../domain/IRoomsRepository.ts";
import RoomEntity from "../domain/RoomEntity.ts";

export default class MemoryRoomsRepository implements IRoomsRepository {
  private static _rooms: Map<string, RoomEntity>;

  constructor() {
    MemoryRoomsRepository._rooms = new Map();
  }

  public save(roomEntity: RoomEntity) {
    MemoryRoomsRepository._rooms.set(roomEntity.name, roomEntity);
  }

  public remove(roomName: string) {
    MemoryRoomsRepository._rooms.delete(roomName);
  }

  public getByName(roomName: string) {
    return MemoryRoomsRepository._rooms.get(roomName);
  }
}
