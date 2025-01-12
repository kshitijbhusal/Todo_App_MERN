import React, { useState } from "react";

const Home = () => {
  let title;
  let discription;
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  //----------------------------------------
  const handleTitleInput = (e) => {
    title = e.target.value;
  };

  const handleDiscriptionInput = (e) => {
    discription = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !discription) {
      setError("Todos cannot be empty!");
    } else {
      setError("");
      setTodos([...todos, { title, discription }]);
    }
  };
  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] bg-white opacity-90 flex items-center justify-center  ">
        {/* //----------------------------------Form for Todos---------------------------------------------- */}

        <div className="w-[50%] max-w-md  shadow-lg rounded-lg p-6 border border-brown-200">
          <h1 className="text-2xl font-bold text-brown-700 mb-6 text-center">
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

            {error && (
              <p className="text-sm text-red-500 text-center font-semibold">
                {error}{" "}
              </p>
            )}

            <input
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-red-600   text-white text-lg py-2 rounded-md hover:bg-brown-700 transition duration-300"
            />
          </form>
        </div>

        {/* //----------------------------------Middle Line Todos---------------------------------------------- */}

        <div className="w-[2px] min-h-[calc(100vh-4rem)] bg-black mx-16 opacity-50"></div>
        {/* //----------------------------------Render Todos---------------------------------------------- */}

        <div className="min-h-[calc(100vh-4rem)] w-[50%] flex flex-col items-center py-5">
          {todos.map((user, index) => (
            <div
              key={index}
              className="bg-white  m-2 w-80 border border-slate-500 rounded-lg px-4 py-2"
            >
              <h1 className="text-lg font-semibold  text-red-800">
                {user.title}
              </h1>
              <p className=" font-semibold text-red-800 ">
                {" "}
                - {user.discription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
