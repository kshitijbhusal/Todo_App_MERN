import { createContext } from "react";
import { useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <authContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </authContext.Provider>
  );
};
