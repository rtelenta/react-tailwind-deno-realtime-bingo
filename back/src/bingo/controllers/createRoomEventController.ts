import { emit_event_to_users_use_case } from "./../../users/factory.ts";
import { create_room_use_case } from "./../../rooms/factory.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { ROOM_IS_CREATED } from "../../config/outputEvents.ts";

export default function createRoomEventController(
  hostId: string,
  roomName: string,
  bet: number
) {
  const roomId = v4.generate();

  create_room_use_case.execute({
    roomId,
    hostId,
    roomName,
    bet,
  });

  emit_event_to_users_use_case.execute(ROOM_IS_CREATED, { roomId }, [hostId]);
}
