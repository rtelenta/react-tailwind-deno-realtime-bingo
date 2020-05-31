import { WebSocket } from "https://deno.land/std/ws/mod.ts";
import { create_user_use_case } from "../../users/factory.ts";

export default function initUserController(userId: string, ws: WebSocket) {
  create_user_use_case.execute(userId, ws);
}
