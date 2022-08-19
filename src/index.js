import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// IMPORT COMPONENTS AND PAGE
import UserPage from "./pages/UserPage";

// START APP REACT RENDER
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserPage />
  </React.StrictMode>
);
