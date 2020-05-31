import UserEntity from "./UserEntity.ts";

export default interface IUsersRepository {
  save(userEntity: UserEntity): void;
  remove(userId: string): void;
  getById(userId: string): UserEntity | undefined;
}
