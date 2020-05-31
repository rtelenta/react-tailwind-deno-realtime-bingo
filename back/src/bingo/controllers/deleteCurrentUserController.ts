import {
  get_user_by_id_use_case,
  remove_user_by_id_use_case,
} from "../../users/factory.ts";
import {
  remove_user_from_room_use_case,
  get_room_by_id_use_case,
} from "../../rooms/factory.ts";

export default function deleteCurrentUserController(userId: string) {
  const user = get_user_by_id_use_case.execute(userId);

  if (user) {
    remove_user_from_room_use_case.execute(user.roomId, user.id);
    remove_user_by_id_use_case.execute(user.id);

    const room = get_room_by_id_use_case.execute(user.roomId);
    // if (room) emit_user_list_use_case.execute(room.users);
  }
}
