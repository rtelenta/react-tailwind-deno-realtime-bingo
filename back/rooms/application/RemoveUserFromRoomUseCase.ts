import IRoomsRepository from "./../domain/IRoomsRepository.ts";

export default class RemoveUserFromRoomUseCase {
  private _repository: IRoomsRepository;

  constructor(repository: IRoomsRepository) {
    this._repository = repository;
  }

  public execute(roomName: string, userId: string) {
    const entity = this._repository.getByName(roomName);

    if (entity) {
      entity.removeUser(userId);
      this._repository.save(entity);
    }
  }
}
