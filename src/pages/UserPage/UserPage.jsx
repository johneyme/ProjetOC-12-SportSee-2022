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
  const [userProfile, setUserProfile] = useState([]);
  const users = userProfile.users;
  const activities = userProfile.activities;
  const average = userProfile.average;
  const performances = userProfile.performances;
  const [errorMsg, setErrorMsg] = useState("Chargement ...");

  useEffect(() => {
    fetchAll(setUserProfile);
    setTimeout(() => {
      setErrorMsg(
        "  Erreur de chargement de données : Veuillez réessayer plus tard"
      );
    }, 3000);
  }, []);

  if (!users || users.length === 0 || users === undefined) {
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
          users={users}
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
