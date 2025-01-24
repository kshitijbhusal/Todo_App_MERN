import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ProctedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (isLoggedIn == false) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProctedRoute;
