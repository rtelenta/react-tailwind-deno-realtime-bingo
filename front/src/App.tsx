import React from "react";
import useBingo from "./hooks/useBingo";

function App() {
  const { users, emitEvent } = useBingo();
  return (
    <main className="bg-gray-300 h-screen w-full p-6">
      <button onClick={emitEvent}>emitir nuevo evento</button>
      <div className="mx-auto max-w-screen-lg flex">
        <aside className="bg-white" style={{ width: "300px" }}>
          {users.map(({ id, name, letter }) => (
            <div
              key={`user_${id}`}
              className="flex p-5 hover:bg-gray-100 cursor-pointer"
            >
              <div className="bg-gray-500 rounded-full h-10 w-10 flex items-center justify-center">
                <span className="text-white font-bold">{letter}</span>
              </div>
              <div className="flex items-center ml-4">
                <span className="font-medium text-sm">{name}</span>
              </div>
              <div className="ml-auto flex items-center">
                <span className="block rounded-full w-6 h-6 text-sm bg-red-600 text-white flex items-center justify-center font-medium">
                  2
                </span>
              </div>
            </div>
          ))}

          <div className="flex p-5 hover:bg-gray-100 cursor-pointer">
            <div className="bg-gray-500 rounded-full h-10 w-10 flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <div className="flex items-center ml-4">
              <span className="font-medium text-sm">Renzo Telenta</span>
            </div>
            <div className="ml-auto flex items-center">
              <span className="block rounded-full w-6 h-6 text-sm bg-red-600 text-white flex items-center justify-center font-medium">
                2
              </span>
            </div>
          </div>

          <div className="flex p-5 cursor-pointer bg-indigo-700 text-white">
            <div className="bg-gray-500 rounded-full h-10 w-10 flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <div className="flex items-center ml-4">
              <span className="font-medium text-sm">Renzo Telenta</span>
            </div>
            <div className="ml-auto flex items-center">
              <span className="block rounded-full w-6 h-6 text-sm bg-red-600 text-white flex items-center justify-center font-medium">
                2
              </span>
            </div>
          </div>
        </aside>
        <div className="pl-6 flex-grow flex-shrink">
          <div className="bg-white p-6"></div>
        </div>
      </div>
    </main>
  );
}

export default App;
