import React from "react";
import { Link } from "react-router-dom";

import { TbLeaf } from "react-icons/tb";
import axios from "axios";

import { useContext } from "react";
import { authContext } from "../context/authContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(authContext);

  const handleLogout = () => {
    setIsLoggedIn(false);

    axios.defaults.withCredentials = true;
    const res = axios.post("http://localhost:8000/user/logout");
  };
  return (
    <nav className="bg-[#31572C] text-[#ECF39E] h-[4rem] px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold  ">
        <Link to="/" className="flex">
          <h1 className="text-2xl">Mindleaf</h1>
          <TbLeaf size={30} />
        </Link>
      </div>
      <ul className="flex space-x-6">
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
        <li>
          <Link
            to="/signup"
            className="text-lg px-4 py-2 text-black font-semibold rounded-lg   border-white bg-yellow-200 hover:bg-yellow-500 "
          >
            Sign Up
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-lg px-4 py-2 text-black font-semibold rounded-lg   border-white bg-white hover:bg-blue-100"
          >
            Login
          </Link>
        </li>

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
  );
};

export default Navbar;
