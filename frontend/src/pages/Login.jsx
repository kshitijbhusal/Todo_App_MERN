import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  //--------------------------------------

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:8000/user/login", data);
      console.log(res);

      if (res.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log("Login Failed", error);
    }
  };

  //--------------------------------------------
  return (
    <>
      <div className="h-screen py-32 flex justify-center  bg-[#E5D0AC] ">
        <div className="bg-[#FEF9E1] py-6  h-80 w-96 flex flex-col  items-center gap-y-10 rounded-lg drop-shadow-lg ">
          <h1 className="text-2xl font-semibold ">Login</h1>

          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-cente0r items-center gap-y-2 "
          >
            <div>
              <label htmlFor="email" className="font-semibold ">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="text"
                spellCheck="false"
                className="outline-none ring-1 ring-black m-2 rounded-sm px-1 font-semibold w-30"
              />
            </div>
            <div>
              <label htmlFor="password" className="font-semibold ">
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                type="password"
                className="outline-none ring-1 ring-black m-2 rounded-sm px-1 font-semibold w-30 "
              />
            </div>

            <input
              value="Login"
              type="submit"
              className="font-semibold bg-[#A31D1D] text-white px-2 py-1 rounded-lg w-20  hover:bg-red-500 cursor-pointer "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
