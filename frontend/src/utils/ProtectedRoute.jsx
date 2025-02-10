import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProctedRoute = ({ children, isLoggedIn }) => {
  if (isLoggedIn == false) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProctedRoute;
