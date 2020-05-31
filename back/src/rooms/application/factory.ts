import { memoryRoomsRespository } from "./../infrastructure/factory.ts";
import InsertUserInRoomUseCase from "./InsertUserInRoomUseCase.ts";
import RemoveUserFromRoomUseCase from "./RemoveUserFromRoomUseCase.ts";
import CreateRoomUseCase from "./CreateRoomUseCase.ts";
import GetRoomByIdUseCase from "./GetRoomByIdUseCase.ts";

export const insertUserInRoomUseCase = () =>
  new InsertUserInRoomUseCase(memoryRoomsRespository());

export const getRoomByIdUseCase = () =>
  new GetRoomByIdUseCase(memoryRoomsRespository());

export const removeUserFromRoomUseCase = () =>
  new RemoveUserFromRoomUseCase(memoryRoomsRespository());

export const createRoomUseCase = () =>
  new CreateRoomUseCase(memoryRoomsRespository());
