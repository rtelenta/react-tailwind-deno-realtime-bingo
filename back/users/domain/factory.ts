import UserEntity, { UserEntityParams } from "./UserEntity.ts";
import IdValueObject from "./IdValueObject.ts";

export function userEntity(params: UserEntityParams) {
  return new UserEntity(params);
}

export function idValueObject() {
  return new IdValueObject();
}
