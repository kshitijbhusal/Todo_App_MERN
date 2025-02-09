import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";

import { Route, Routes } from "react-router-dom";
import ProctedRoute from "./utils/ProtectedRoute";
import Loading from "./pages/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuth = async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get("http://localhost:8000/user/auth");
      if (res.status === 200) {
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (error) {}
  };

  useEffect(() => {
    checkAuth();
  }, []);

  console.log(isLoggedIn);
  return (
    <>
      <Navbar />
      <div className="h-30 w-20 bg-red-700"></div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <ProctedRoute isLoggedIn={isLoggedIn}>
                <Home />
              </ProctedRoute>
            }
          />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProctedRoute isLoggedIn={isLoggedIn}>
                <Account />
              </ProctedRoute>
            }
          />
          <Route path="/loading" element={<Loading />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
