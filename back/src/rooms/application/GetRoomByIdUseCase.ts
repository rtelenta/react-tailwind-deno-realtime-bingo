import IRoomsRepository from "./../domain/IRoomsRepository.ts";

export default class GetRoomByIdUseCase {
  private _repository: IRoomsRepository;

  constructor(repository: IRoomsRepository) {
    this._repository = repository;
  }

  public execute(roomId: string) {
    return this._repository.getById(roomId)?.toJSON();
  }
}
