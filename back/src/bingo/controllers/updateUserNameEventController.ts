import { update_user_use_case } from "../../users/factory.ts";

export default function updateUserNameEventController(
  userId: string,
  userName: string
) {
  update_user_use_case.execute(userId, {
    name: userName,
  });
}
