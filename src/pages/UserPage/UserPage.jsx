import "./UserPage.css";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import AsideOptions from "../../components/AsideOptions/AsideOptions";

function UserPage() {
  // UserId search in Url bar
  const queryString = window.location.search;
  const userId = new URLSearchParams(queryString).get("id");

  // Fetch Use to load data user
  const loadUsers = `http://localhost:3000/user/${userId}`;
  const loadActivities = `http://localhost:3000/user/${userId}/activity`;
  const loadAverage = `http://localhost:3000/user/${userId}/average-sessions`;
  const loadPerformance = `http://localhost:3000/user/${userId}/performance`;

  const [users, setUsers] = useState();
  const [activities, setActivities] = useState([]);
  const [average, setAvererage] = useState([]);
  const [performances, setPerformances] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseUser = await fetch(loadUsers);
      const responseActivities = await fetch(loadActivities);
      const responseAverage = await fetch(loadAverage);
      const responsePerformance = await fetch(loadPerformance);

      const newDataUser = await responseUser.json();
      const newDataActivities = await responseActivities.json();
      const newDataAverage = await responseAverage.json();
      const newDataPerformance = await responsePerformance.json();

      setUsers(newDataUser);
      setActivities(newDataActivities);
      setAvererage(newDataAverage);
      setPerformances(newDataPerformance);
    };

    fetchData();
  }, [loadUsers, loadActivities, loadAverage, loadPerformance]);

  if (!users || users.length === 0) {
    return null;
  } else {
    return (
      <main className="user-page">
        <Header />
        <AsideOptions />
        <Profile
          users={users}
          activities={activities}
          average={average}
          performances={performances}
        />
      </main>
    );
  }
}

export default UserPage;
