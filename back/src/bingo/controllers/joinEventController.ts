import { WebSocket } from "https://deno.land/std/ws/mod.ts";
/*import {
  create_user_use_case,
  update_user_use_case,
  emit_user_list_use_case,
} from "../../users/factory.ts";

import {
  insert_user_in_room_use_case,
  get_room_by_name_use_case,
} from "../../rooms/factory.ts";*/

type joinEventControllerParams = {
  userId: string;
  name: string;
  roomName: string;
  ws: WebSocket;
};

export default function joinEventController({
  userId,
  name,
  roomName,
  ws,
}: joinEventControllerParams) {
  /* update_user_use_case.execute(userId, {
    name,
    roomName,
  });

  create_user_use_case.execute({
    userId: userId,
    ws: ws,
    name,
    roomName,
  });

  insert_user_in_room_use_case.execute(roomName, userId);

  const room = get_room_by_name_use_case.execute(roomName);
  if (room) emit_user_list_use_case.execute(room.users); */
}
