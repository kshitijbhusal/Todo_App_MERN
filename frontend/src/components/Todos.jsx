import React, { useState } from "react";

const Todos = ({ todos }) => {
  const [completed, setCompleted] = useState(true);
  return (
    <div className="">
      {/* //----------------------------------Render Todos---------------------------------------------- */}

      <div className="min-h-[calc(100vh-4rem)] bg-red-500 py-5 drop-shadow-lg grid grid-cols-2 ">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-white h-32  m-2 w-80 border  rounded-lg px-4 py-2 hover:bg-slate-50 flex flex-col justify-between "
          >
            <div>
              <div>
                <h1 className="text-lg font-semibold  text-black">
                  {todo.title}
                </h1>
                <hr />
                <p className=" font-semibold text-black ">
                  {" "}
                  {todo.discription}
                </p>
              </div>
              <button className="bg-slate-600 text-white px-2 py-2 text-[12px] rounded-md hover:bg-slate-800">
                {todo.completed ? "Completed" : "Mark as completed"}
              </button>
            </div>

            <div className="bg-black  h-2 w-full rounded "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
