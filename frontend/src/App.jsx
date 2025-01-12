import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="h-30 w-20 bg-red-700"></div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
