import IRoomsRepository from "./../domain/IRoomsRepository.ts";
import { idValueObject, roomEntity } from "./../domain/factory.ts";

export default class InsertUserInRoomUseCase {
  private _repository: IRoomsRepository;

  constructor(repository: IRoomsRepository) {
    this._repository = repository;
  }

  public execute(roomName: string, userId: string) {
    let entity = this._repository.getByName(roomName);

    if (entity) {
      entity.addUser(userId);
    } else {
      const roomId = idValueObject();
      entity = roomEntity({ id: roomId, name: roomName, users: [userId] });
    }

    this._repository.save(entity);
  }
}
