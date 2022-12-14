import "./UserPage.css";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import AsideOptions from "../../components/AsideOptions/AsideOptions";
import fetchAll from "../../utils/fetchData";
import PropTypes from "prop-types";
/**
 * User page.
 * @description Displays the User page with all blocks (Header, Left menu (asideOptions), Profile components (userInfo, charts, ...)).
 * @using the fetchAll function to recover all user information from the database
 * @returns User page React Element.
 * @author John EYME
 */

function UserPage() {
  const [user, setUser] = useState([]);
  const [activities, setActivities] = useState([]);
  const [average, setAverage] = useState([]);
  const [performances, setPerformances] = useState([]);
  const [errorMsg, setErrorMsg] = useState("Chargement ...");

  useEffect(() => {
    fetchAll(setUser, setActivities, setAverage, setPerformances);
    setTimeout(() => {
      setErrorMsg(
        "  Erreur de chargement de données : Veuillez réessayer plus tard"
      );
    }, 3000);
  }, []);
  if (!user || user.length === 0 || user === undefined) {
    return (
      <main className="user-page">
        <Header />
        <AsideOptions />
        <p className="error-msg">{errorMsg}</p>
      </main>
    );
  } else {
    return (
      <main className="user-page">
        <Header />
        <AsideOptions />
        <Profile
          users={user}
          activities={activities}
          average={average}
          performances={performances}
        />
      </main>
    );
  }
}

Profile.propTypes = {
  users: PropTypes.object,
  activities: PropTypes.object,
  average: PropTypes.object,
  performances: PropTypes.object,
};

export default UserPage;
