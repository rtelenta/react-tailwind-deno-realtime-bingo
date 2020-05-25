import { memoryUsersRepository } from "./../infrastructure/repository/factory.ts";
import CreateUserUseCase from "./CreateUserUseCase.ts";
import UpdateUserUseCase from "./UpdateUserUseCase.ts";
import EmitUserListUseCase from "./EmitUserListUseCase.ts";
import GetUserByIdUseCase from "./GetUserByIdUseCase.ts";
import RemoveUserByIdUseCase from "./RemoveUserByIdUseCase.ts";

export const createUserUseCase = () =>
  new CreateUserUseCase(memoryUsersRepository());

export const updateUserUseCase = () =>
  new UpdateUserUseCase(memoryUsersRepository());

export const emitUserListUseCase = () =>
  new EmitUserListUseCase(memoryUsersRepository());

export const getUserByIdUseCase = () =>
  new GetUserByIdUseCase(memoryUsersRepository());

export const removeUserByIdUseCase = () =>
  new RemoveUserByIdUseCase(memoryUsersRepository());
