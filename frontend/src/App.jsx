import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";

import { Route, Routes } from "react-router-dom";
import ProctedRoute from "./utils/ProtectedRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="h-30 w-20 bg-red-700"></div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <ProctedRoute>
                <Home />
              </ProctedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProctedRoute>
                <Account />
              </ProctedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
