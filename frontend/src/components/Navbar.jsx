import React from "react";
import { Link } from "react-router-dom";

import { TbLeaf } from "react-icons/tb";
import axios from "axios";

const Navbar = () => {
  const handleLogout = () => {
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
          <Link to="/" className="text-xl px-2 py-1 rounded ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/account" className="text-xl px-2 py-1 rounded ">
            Account
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="text-black bg-[#E5D0AC] px-2 py-1 rounded-sm w-2"
          >
            Sign Up
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-black bg-[#E5D0AC] px-3 py-1   rounded-sm"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            onClick={handleLogout}
            to="/logout"
            className="text-black bg-[#E5D0AC] px-3 py-1   rounded-sm"
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
