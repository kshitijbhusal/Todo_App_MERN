import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  //--------------------------------------

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.post("http://localhost:8000/user/register", data);
    } catch (error) {
      console.log("Sign Up Failed.", error);
    }
  };

  //--------------------------------------------

  return (
    <>
      <div className="h-screen py-32 flex justify-center  bg-[#E5D0AC] ">
        <div className="bg-[#FEF9E1] py-6  h-80 w-96 flex flex-col  items-center gap-y-10 rounded-lg drop-shadow-lg ">
          <h1 className="text-2xl font-semibold ">Sign Up</h1>

          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-cente0r items-center gap-y-2 "
          >
            <div>
              <label htmlFor="username" className="font-semibold ">
                Username
              </label>
              <input
                {...register("username")}
                id="username"
                type="text"
                spellCheck="false"
                className="outline-none ring-1 ring-black m-2 rounded-sm px-1 font-semibold w-30"
              />
            </div>
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
              type="submit"
              value="Sign Up"
              className="font-semibold bg-[#A31D1D] text-white px-2 py-1 rounded-lg w-20 hover:bg-red-500 cursor-pointer "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
