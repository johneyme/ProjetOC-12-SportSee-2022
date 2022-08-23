import "../style/UserPage.css";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import AsideOptions from "../components/AsideOptions";

function UserPage() {
  // UserId search in Url bar
  const queryString = window.location.search;
  const userId = new URLSearchParams(queryString).get("id");

  // Fetch Use to load data user
  const loadUsers = `http://localhost:3000/user/${userId}`;
  /* const loadActivities = `http://localhost:3000/user/${userId}/activity`;
  const loadAverage = `http://localhost:3000/user/${userId}/average-sessions`;
  const loadPerformance = `http://localhost:3000/user/${userId}/performance`;*/

  const [users, setUsers] = useState([]);
  /*const [activities, setActivities] = useState([]);
  const [average, setAvererage] = useState([]);
  const [performances, setPerformances] = useState([]);*/

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(loadUsers);
      const newData = await response.json();
      setUsers(newData);
    };

    fetchData();
  }, [loadUsers]);
  if (!users || users.length === 0) {
    return null;
  } else {
    console.log(users);
    return (
      <main className="user-page">
        <Header />
        <AsideOptions />
        <Profile users={users} />
      </main>
    );
  }
}

export default UserPage;
