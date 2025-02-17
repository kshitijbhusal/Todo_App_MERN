import React, { useState } from "react";
import axios from "axios";

const Todos = ({ todos }) => {
  console.log(todos);

  const handleTask = async (id) => {
    try {
      console.log(id);
      await axios.patch(`http://localhost:8000/todo/update/${id}`, {
        completed: true, // Send completed status
      });
      console.log(`Task ${id} marked as completed.`);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div>
      {/* Render Todos */}
      <div className="min-h-[calc(100vh-4rem)]  py-5 drop-shadow-lg grid grid-cols-1 ">
        {todos.map((todo, i) => (
          <div
            key={i} // Use unique key (_id from MongoDB)
            className={`m- h-24 w-full border rounded-lg px-4 py-2 flex flex-col justify-between ${
              todo.completed ? "bg-green-200" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-xl font-semibold text-black mb-1">
                  {todo.title}
                </h1>

                <p className="text-lg font-semibold text-black mt-1">
                  {todo.discription}
                </p>
              </div>

              <input
                onClick={() => handleTask(todo._id)} // Pass todo ID
                className="w-6 h-6 accent-blue-500 cursor-pointer "
                type="checkbox"
                checked={todo.completed} // Reflect completion status
                readOnly
              />
            </div>

            <div className="bg-green-500 h-2 w-full rounded mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
