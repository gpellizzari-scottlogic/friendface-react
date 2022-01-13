import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ProfileContextProvider } from "./Store/profile-context";

ReactDOM.render(
  <React.StrictMode>
    <ProfileContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProfileContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
