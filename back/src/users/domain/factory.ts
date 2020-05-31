import UserEntity, { UserEntityParams } from "./UserEntity.ts";

export function userEntity(params: UserEntityParams) {
  return new UserEntity(params);
}
