import React from "react";

const Todos = ({ todos }) => {
  return (
    <div>
      {/* //----------------------------------Render Todos---------------------------------------------- */}

      <div className="min-h-[calc(100vh-4rem)] w-[50%] flex flex-col items-center py-5 drop-shadow-lg ">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-white  m-2 w-80 border border-slate-500 rounded-lg px-4 py-2 hover:bg-slate-50 flex justify-between"
          >
            <div>
              <h1 className="text-lg font-semibold  text-black">
                {todo.title}
              </h1>
              <p className=" font-semibold text-black ">
                {" "}
                - {todo.discription}
              </p>
            </div>
            <button className="bg-slate-600 text-white px-2 py-2 text-[12px] rounded-md hover:bg-slate-800">
              {todo.completed ? "Completed" : "Mark as completed"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
