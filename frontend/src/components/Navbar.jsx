import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#A31D1D] text-white h-[4rem] px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">prepnepal</Link>
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
      </ul>
    </nav>
  );
};

export default Navbar;
