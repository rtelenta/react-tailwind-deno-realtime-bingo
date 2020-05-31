import IUsersRepository from "../domain/IUsersRepository.ts";

type userUpdateFields = { name?: string; roomId?: string };

export default class UpdateUserUseCase {
  private _repository: IUsersRepository;

  constructor(repository: IUsersRepository) {
    this._repository = repository;
  }

  public execute(userId: string, { name, roomId }: userUpdateFields) {
    const userEntity = this._repository.getById(userId);

    if (userEntity) {
      if (name) userEntity.name = name;
      if (roomId) userEntity.roomId = roomId;

      this._repository.save(userEntity);
    }
  }
}
