import IUsersRepository from "../domain/IUsersRepository.ts";

export default class GetUserByIdUseCase {
  private _repository: IUsersRepository;

  constructor(repository: IUsersRepository) {
    this._repository = repository;
  }

  public execute(userId: string) {
    return this._repository.getById(userId)?.toJSON();
  }
}
