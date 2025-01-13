import React, { useEffect, useState } from "react";
import CreateTodo from "../components/CreateTodo";
import Todos from "../components/Todos";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/todo/get");
        console.log(res);
        setTodos(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // [
  //   { title: "abc", discription: "defghi", completed: "false" },
  //   { title: "abc", discription: "defghi", completed: "false" },
  // ]

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] bg-white opacity-90 flex items-center justify-between px-36  ">
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
};

export default Home;
