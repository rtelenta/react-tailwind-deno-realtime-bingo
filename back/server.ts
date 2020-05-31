import {
  listenAndServe,
  ServerRequest,
} from "https://deno.land/std/http/server.ts";
import { acceptWebSocket, acceptable } from "https://deno.land/std/ws/mod.ts";
import BingoController from "./src/bingo/BingoController.ts";

listenAndServe({ port: 3000 }, async (req: ServerRequest) => {
  if (req.method === "GET" && req.url === "/ws") {
    if (acceptable(req)) {
      const ws = await acceptWebSocket({
        conn: req.conn,
        bufReader: req.r,
        bufWriter: req.w,
        headers: req.headers,
      });

      const bingoController = new BingoController(ws);
      bingoController.watch();
    }
  }
});

console.log("Server started on port 3000");
