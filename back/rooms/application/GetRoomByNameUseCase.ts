import IRoomsRepository from "./../domain/IRoomsRepository.ts";

export default class GetRoomByNameUseCase {
  private _repository: IRoomsRepository;

  constructor(repository: IRoomsRepository) {
    this._repository = repository;
  }

  public execute(roomName: string) {
    return this._repository.getByName(roomName)?.toJSON();
  }
}
