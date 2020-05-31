import IUsersRepository from "../domain/IUsersRepository.ts";

export default class RemoveUserByIdUseCase {
  private _repository: IUsersRepository;

  constructor(repository: IUsersRepository) {
    this._repository = repository;
  }

  public execute(userId: string) {
    this._repository.remove(userId);
  }
}
