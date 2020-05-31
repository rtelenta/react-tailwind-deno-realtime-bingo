import {
  createUserUseCase,
  updateUserUseCase,
  getUserByIdUseCase,
  removeUserByIdUseCase,
  emitEventToUsersUseCase,
} from "./application/factory.ts";

export const update_user_use_case = updateUserUseCase();
export const create_user_use_case = createUserUseCase();
export const get_user_by_id_use_case = getUserByIdUseCase();
export const remove_user_by_id_use_case = removeUserByIdUseCase();
export const emit_event_to_users_use_case = emitEventToUsersUseCase();
