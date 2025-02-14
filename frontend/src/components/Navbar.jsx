import React from "react";
import { Link } from "react-router-dom";

import { TbLeaf } from "react-icons/tb";
import axios from "axios";

import { useContext } from "react";
import { authContext } from "../context/authContext";
import { userContext } from "../context/userContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(authContext);
  const { user, setUser } = useContext(userContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser("");

    axios.defaults.withCredentials = true;
    const res = axios.post("http://localhost:8000/user/logout");
  };
  return (
    <div className="bg-[#31572C]">
      <nav className="container mx-auto  text-[#ECF39E] h-[4rem]   flex justify-between items-center">
        <div className="text-xl font-bold  ">
          <Link to="/" className="flex">
            <h1 className="text-2xl">Mindleaf</h1>
            <TbLeaf size={30} />
          </Link>
        </div>
        <ul className="flex space-x-6 items-center ">
          <li>
            <Link
              to="/"
              className="text-xl px-2 py-1 text-white semibold rounded "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/account"
              className="text-xl px-2 py-1 text-white semibold rounded "
            >
              Account
            </Link>
          </li>
          {!user && !isLoggedIn && (
            <li>
              <Link
                to="/signup"
                className="text-lg px-4 py-2 text-black font-semibold rounded-lg   border-white bg-yellow-200 hover:bg-yellow-500 "
              >
                Sign Up
              </Link>
            </li>
          )}

          {!user && !isLoggedIn && (
            <li>
              <Link
                to="/login"
                className="text-lg px-4 py-2 text-black font-semibold rounded-lg   border-white bg-white hover:bg-blue-100"
              >
                Login
              </Link>
            </li>
          )}

          {user && isLoggedIn && (
            <button>
              <div className="h-12 w-12 bg-green-600  text-white rounded-full flex justify-center items-center text-2xl  border-slate-200 border-2 uppercase ">
                {user.username[0]}{" "}
              </div>
            </button>
          )}

          {isLoggedIn && (
            <li>
              <Link
                onClick={handleLogout}
                to="/logout"
                className="text-lg px-4 py-2 text-white font-semibold rounded-lg   bg-red-500 hover:bg-red-700"
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
