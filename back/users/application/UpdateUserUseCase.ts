import IUsersRepository from "../domain/IUsersRepository.ts";

type userUpdateFields = { name: string; roomName: string };

export default class UpdateUserUseCase {
  private _repository: IUsersRepository;

  constructor(repository: IUsersRepository) {
    this._repository = repository;
  }

  public execute(userId: string, { name, roomName }: userUpdateFields) {
    const userEntity = this._repository.getById(userId);

    if (userEntity) {
      userEntity.name = name;
      userEntity.roomName = roomName;

      this._repository.save(userEntity);
    }
  }
}
