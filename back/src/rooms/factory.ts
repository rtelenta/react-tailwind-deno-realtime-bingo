import {
  insertUserInRoomUseCase,
  removeUserFromRoomUseCase,
  createRoomUseCase,
  getRoomByIdUseCase,
} from "./application/factory.ts";

export const insert_user_in_room_use_case = insertUserInRoomUseCase();
export const remove_user_from_room_use_case = removeUserFromRoomUseCase();
export const create_room_use_case = createRoomUseCase();
export const get_room_by_id_use_case = getRoomByIdUseCase();
