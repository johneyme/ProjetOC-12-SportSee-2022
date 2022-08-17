import "../style/Profile.css";
import React, { useEffect, useState } from "react";
import DailyActivitiesGraph from "../components/DailyActivitiesGraph";
import ScoreGraph from "../components/ScoreGraph";
import RadarGraph from "../components/RadarGraph";
import AverageLineGraph from "../components/AverageLineGraph";
import InfoCase from "../components/InfoCase";
import logoFlame from "../assets/logo-flame.svg";
import logoChicken from "../assets/logo-chicken.svg";
import logoApple from "../assets/logo-apple.svg";
import logoBurger from "../assets/logo-burger.svg";

function Profile() {
  // UserId search in Url bar
  const queryString = window.location.search;
  const userId = new URLSearchParams(queryString).get("id");

  // Fetch Use to load data user
  const loadData = `http://localhost:3000/user/${userId}`;

  const [users, setUsers] = useState([]);
  // PROBLEME NIBVEAU DU FECTH RENVOI UNE ERREUR LORSQUE QU'ON LANCE LE YARN START
  // JE DOIS ENLEVER LES ENDPOINTS POUR CHARGER LA PAGE ET LES DATA ET ENSUITES LES REMETTRES
  // IMPOSSIBLE DE LE FAIRE AU CHARGEMENT DE LA PAGE

  useEffect(() => {
    fetch(loadData)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, [loadData]);

  return (
    <main className="profile-page">
      <h1 className="profile-page__title">
        Bonjour <span className="userName-title">{users.data.id}</span>
      </h1>
      <p className="profile-page__message">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
      <div className="profile-row">
        <div className="profile-row__graphic">
          <DailyActivitiesGraph />
          <AverageLineGraph />
          <RadarGraph />
          <ScoreGraph />
        </div>
        <div className="profile-row__info">
          <InfoCase
            img={logoFlame}
            count="2500Kcal"
            category="Calories"
            color="#FF000007"
          />
          <InfoCase
            img={logoChicken}
            count="90g"
            category="Proteines"
            color="#4ab7ff10"
          />
          <InfoCase
            img={logoApple}
            count="150g"
            category="Glucides"
            color="#FDCC0C10"
          />
          <InfoCase
            img={logoBurger}
            count="120g"
            category="Calories"
            color="#FD518110"
          />
        </div>
      </div>
    </main>
  );
}

export default Profile;
