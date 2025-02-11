import { createContext } from "react";
import { useState } from "react";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <authContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthContextProvider };
