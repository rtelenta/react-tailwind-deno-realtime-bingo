import { memoryRoomsRespository } from "./../infrastructure/factory.ts";
import InsertUserInRoomUseCase from "./InsertUserInRoomUseCase.ts";
import GetRoomByNameUseCase from "./GetRoomByNameUseCase.ts";
import RemoveUserFromRoomUseCase from "./RemoveUserFromRoomUseCase.ts";

export const insertUserInRoomUseCase = () =>
  new InsertUserInRoomUseCase(memoryRoomsRespository());

export const getRoomByNameUseCase = () =>
  new GetRoomByNameUseCase(memoryRoomsRespository());

export const removeUserFromRoomUseCase = () =>
  new RemoveUserFromRoomUseCase(memoryRoomsRespository());
