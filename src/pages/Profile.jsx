import "../style/Profile.css";
import React, { useEffect, useState } from "react";

// UserId search in Url bar
const queryString = window.location.search;
const userId = new URLSearchParams(queryString).get("id");
console.log(userId);

// Fetch Use to load data user
const loadData = `http://localhost:3000/user/${userId}`;

function Profile() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(loadData)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="profile-page">
      <h1 className="profile-title-name">{users.data.id}</h1>
      <p className="profile-msg">
        Félicitation vous avez explosez vos objectifs hier !
      </p>
      <div className="profile-row-graphic">
        <div className="graphic-1">graph 1</div>
        <div className="graphic-2">graph 2</div>
        <div className="graphic-3">graph 3</div>
        <div className="graphic-4">graph 4</div>
      </div>
      <div className="profile-row-info">
        <div className="info-1">info 1</div>
        <div className="info-2">info 2</div>
        <div className="info-3">info 3</div>
        <div className="info-4">info 4</div>
      </div>
    </main>
  );
}

export default Profile;
