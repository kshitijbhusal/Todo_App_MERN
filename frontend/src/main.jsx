import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "./context/userContext.jsx";
import { AppProvider } from "./context/AppProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      {/* <AuthContextProvider>
      <UserContextProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </UserContextProvider>
    </AuthContextProvider> */}
    </AppProvider>
  </StrictMode>
);
