import IRoomsRepository from "./../domain/IRoomsRepository.ts";

export default class InsertUserInRoomUseCase {
  private _repository: IRoomsRepository;

  constructor(repository: IRoomsRepository) {
    this._repository = repository;
  }

  public execute(roomId: string, userId: string) {
    const entity = this._repository.getById(roomId);

    if (entity) {
      entity.addUser(userId);
      this._repository.save(entity);
    }
  }
}
