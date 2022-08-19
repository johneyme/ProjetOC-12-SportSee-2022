import "../style/UserPage.css";
import React /*, { useEffect, useState }*/ from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import AsideOptions from "../components/AsideOptions";

function UserPage() {
  return (
    <main className="user-page">
      <Header />
      <AsideOptions />
      <Profile />
    </main>
  );
}

export default UserPage;
