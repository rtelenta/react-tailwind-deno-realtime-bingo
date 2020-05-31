import IUsersRepository from "../domain/IUsersRepository.ts";
import { WebSocket } from "https://deno.land/std/ws/mod.ts";
import { userEntity } from "../domain/factory.ts";

export default class CreateUserUseCase {
  private _repository: IUsersRepository;

  constructor(repository: IUsersRepository) {
    this._repository = repository;
  }

  public execute(userId: string, ws: WebSocket) {
    const entity = userEntity({ userId, ws });

    this._repository.save(entity);
  }
}
