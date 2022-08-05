import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// IMPORT COMPONENTS AND PAGE
import Header from "./components/Header";
import Profile from "./pages/Profile";
import AsideOptions from "./components/AsideOptions";

// START APP REACT RENDER
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <AsideOptions />
    <Profile />
  </React.StrictMode>
);
