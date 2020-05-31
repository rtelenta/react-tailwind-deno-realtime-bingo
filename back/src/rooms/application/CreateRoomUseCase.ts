import IRoomsRepository from "./../domain/IRoomsRepository.ts";
import { roomEntity } from "./../domain/factory.ts";

type CreateRoomParams = {
  hostId: string;
  roomId: string;
  roomName: string;
  bet: number;
};

export default class CreateRoomUseCase {
  private _repository: IRoomsRepository;

  constructor(repository: IRoomsRepository) {
    this._repository = repository;
  }

  public execute({ roomId, roomName, hostId, bet }: CreateRoomParams) {
    const entity = roomEntity({
      id: roomId,
      name: roomName,
      users: [hostId],
      bet,
    });

    this._repository.save(entity);
  }
}
