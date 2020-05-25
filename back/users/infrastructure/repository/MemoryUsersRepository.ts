import IUsersRepository from "../../domain/IUsersRepository.ts";
import UserEntity from "../../domain/UserEntity.ts";

export default class MemoryUsersRepository implements IUsersRepository {
  private static _users: Map<string, UserEntity>;

  constructor() {
    MemoryUsersRepository._users = new Map();
  }

  public save(userEntity: UserEntity) {
    MemoryUsersRepository._users.set(userEntity.id, userEntity);
  }

  public remove(userId: string) {
    MemoryUsersRepository._users.delete(userId);
  }

  public getById(userId: string) {
    return MemoryUsersRepository._users.get(userId);
  }
}
