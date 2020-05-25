import IUsersRepository from "../domain/IUsersRepository.ts";

export default class EmitUserListUseCase {
  private _repository: IUsersRepository;

  constructor(repository: IUsersRepository) {
    this._repository = repository;
  }

  public execute(userList: string[]) {
    const userEntities = userList.map((userId) =>
      this._repository.getById(userId)
    );

    const userListData = userEntities.map((user) => user?.toJSON());

    for (const userEntity of userEntities) {
      const event = {
        event: "users",
        payload: userListData,
      };
      userEntity?.ws.send(JSON.stringify(event));
    }
  }
}
