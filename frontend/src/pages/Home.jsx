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
  const fetchData = async () => {
    const res = await axios.get("http://localhost:8000/todo/get");
    const { data } = await axios.get("http://localhost:8000/user/getMe");
    setUser(data.user);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [todos]);

  return (
    <>
      <div className="h-[calc(100vh-4rem)] grid grid-cols-12 px-16   ">
        <div className=" h-full w-full col-span-6 flex flex-col  justify-center">
          <CreateTodo />
        </div>

        <div className=" h-full w-full col-span-6   ">
          <Todos todos={todos} />
        </div>
      </div>
    </>
  );
};

export default Home;
