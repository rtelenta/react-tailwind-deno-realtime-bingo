import {
  createUserUseCase,
  emitUserListUseCase,
  updateUserUseCase,
  getUserByIdUseCase,
  removeUserByIdUseCase,
} from "./application/factory.ts";

export const update_user_use_case = updateUserUseCase();
export const create_user_use_case = createUserUseCase();
export const emit_user_list_use_case = emitUserListUseCase();
export const get_user_by_id_use_case = getUserByIdUseCase();
export const remove_user_by_id_use_case = removeUserByIdUseCase();
