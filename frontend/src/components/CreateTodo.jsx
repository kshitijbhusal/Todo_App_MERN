import React from "react";
import { useState } from "react";
import axios from "axios";

const CreateTodo = () => {
  let [title, setTitle] = useState("");
  let [discription, setDiscription] = useState("");

  //----------------------------------------
  const handleTitleInput = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleDiscriptionInput = (e) => {
    setDiscription(e.target.value);
    console.log(discription);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!title || !discription) {
    //   setError("Todos cannot be empty!");
    // } else {
    //   setError("");

    // }

    axios.post("http://localhost:8000/todo/create", { title, discription });
  };

  return (
    <div className=" w-[50%] ">
      {/* //----------------------------------Form for Todos---------------------------------------------- */}

      <div className="w-full h-80  max-w-md  shadow-lg rounded-lg p-6 border border-brown-200">
        <h1 className="text-2xl font-bold text-brown-700 mb-6 text-center text-[#132A13]">
          Make your todo's now.
        </h1>
        <form
          action=""
          className="flex flex-col  gap-4  m-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring focus:ring-brown-300 focus:outline-none text-lg font-medium "
            spellCheck="false"
            onChange={handleTitleInput}
          />

          <input
            type="text"
            placeholder="Discription"
            className="w-full px-4 py-2 border border-brown-300 rounded-md focus:ring focus:ring-brown-300 focus:outline-none font-medium  "
            spellCheck="false"
            onChange={handleDiscriptionInput}
          />

          {/* {error && (
            <p className="text-sm text-red-500 text-center font-semibold">
              {error}{" "}
            </p>
          )} */}

          <input
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#4F772D]   text-[white] text-lg py-2 rounded-md hover:bg-brown-700 transition duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
