import React, { useEffect, useState } from "react";
import CreateTodo from "../components/CreateTodo";
import Todos from "../components/Todos";
import axios from "axios";

import { useContext } from "react";
import { userContext } from "../context/userContext";

const Home = () => {
  const { user, setUser } = useContext(userContext);

  const [todos, setTodos] = useState([]);
  // const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/todo/get");
        const { data } = await axios.get("http://localhost:8000/user/getMe");
        setUser(data.user);
        setTodos(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)]  opacity-90 flex items-center justify-between px-36  ">
        <h1>Hello </h1>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
};

export default Home;
