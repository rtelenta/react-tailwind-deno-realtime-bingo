import { useEffect, useState } from "react";

type UserType = {
  id: string;
  name: string;
  letter: string;
};

const ws = new WebSocket("ws://localhost:3000/ws");

function useWebSocket() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    ws.addEventListener("open", onConnectionOpen);
    ws.addEventListener("message", onMessageRecived);

    function onConnectionOpen() {
      const event = {
        event: "join",
        payload: {
          name: "Renzo",
          roomName: "gao",
        },
      };

      ws.send(JSON.stringify(event));
    }

    function onMessageRecived(e: MessageEvent) {
      console.log("Message recived", e);
      const { event, payload } = JSON.parse(e.data);
      console.log(event, payload);

      switch (event) {
        case "users":
          const usersWithLetter = payload.map((user: UserType) => ({
            ...user,
            letter: user.name.charAt(0),
          }));
          setUsers(usersWithLetter);
          break;
      }
    }
  }, []);

  function emitEvent() {
    const event = {
      event: "generico",
      name: "Renzo",
      group: "gao",
    };

    ws.send(JSON.stringify(event));
  }

  return { users, emitEvent };
}

export default useWebSocket;
