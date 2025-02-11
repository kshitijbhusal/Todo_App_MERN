import React from "react";
import { AuthContextProvider } from "./authContext";
import { UserContextProvider } from "./userContext";

export const AppProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </AuthContextProvider>
  );
};
