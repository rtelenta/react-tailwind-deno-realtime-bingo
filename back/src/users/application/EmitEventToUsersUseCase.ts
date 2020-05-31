import IUsersRepository from "../domain/IUsersRepository.ts";

export default class EmitEventToUsersUseCase {
  private _repository: IUsersRepository;

  constructor(repository: IUsersRepository) {
    this._repository = repository;
  }

  public execute(typeEvent: string, payload: any, userList: string[]) {
    const userEntities = userList.map((userId) =>
      this._repository.getById(userId)
    );

    for (const userEntity of userEntities) {
      const event = {
        event: typeEvent,
        payload,
      };
      userEntity?.ws.send(JSON.stringify(event));
    }
  }
}
