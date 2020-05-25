import { WebSocket } from "https://deno.land/std/ws/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { isWebSocketCloseEvent } from "https://deno.land/std/ws/mod.ts";

type userType = {
  userId: string;
  name: string;
  groupName: string;
  ws: WebSocket;
};

type stringObj = { [index: string]: string };

const usersMap = new Map<string, userType>();
const groupsMap = new Map<string, userType[]>();

export default async function bingo(ws: WebSocket) {
  const userId = v4.generate();
  console.log("connected", userId);

  for await (const data of ws) {
    if (isWebSocketCloseEvent(data)) {
      leaveGroup(userId);
      console.log("leave", userId);
      break;
    }

    console.log("controlador", userId);

    const { event, name, groupName }: stringObj = JSON.parse(data as string);

    switch (event) {
      case "join":
        const userObj = {
          userId,
          name,
          groupName,
          ws,
        };

        console.log("event join", userId);
        usersMap.set(userId, userObj);

        const users = groupsMap.get(groupName) || [];
        users.push(userObj);
        groupsMap.set(groupName, users);

        emitUserList(groupName);
        break;

      case "generico":
        console.log("event generico", userId);
        break;
    }

    console.log(event, "emitido");
    console.log("--------- fin del contrlador", userId);
  }
}

function emitUserList(groupName: string) {
  const users = groupsMap.get(groupName) || [];

  for (const { ws } of users) {
    const event = {
      event: "users",
      data: getDisplayUsers(users),
    };
    ws.send(JSON.stringify(event));
  }
}

function getDisplayUsers(users: userType[]) {
  return users.map(({ userId, name }) => ({ id: userId, name }));
}

function leaveGroup(userId: string) {
  const userObj = usersMap.get(userId);
  if (!userObj) {
    return;
  }
  const users = groupsMap.get(userObj.groupName) || [];

  groupsMap.set(
    userObj.groupName,
    users.filter((u) => u.userId !== userId)
  );

  usersMap.delete(userId);

  emitUserList(userObj.groupName);
}
