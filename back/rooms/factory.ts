import {
  insertUserInRoomUseCase,
  getRoomByNameUseCase,
  removeUserFromRoomUseCase,
} from "./application/factory.ts";

export const insert_user_in_room_use_case = insertUserInRoomUseCase();
export const get_room_by_name_use_case = getRoomByNameUseCase();
export const remove_user_from_room_use_case = removeUserFromRoomUseCase();
