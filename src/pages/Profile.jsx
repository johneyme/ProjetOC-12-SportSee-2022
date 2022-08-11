import "../style/Profile.css";
import React /*, { useEffect, useState }*/ from "react";
import DailyActivitiesGraph from "../components/DailyActivitiesGraph";

function Profile() {
  /*
  // UserId search in Url bar
  const queryString = window.location.search;
  const userId = new URLSearchParams(queryString).get("id");

  // Fetch Use to load data user
  const loadData = `http://localhost:3000/user/${userId}`;

  const [users, setUsers] = useState();
  // PROBLEME NIBVEAU DU FECTH RENVOI UNE ERREUR LORSQUE QU'ON LANCE LE YARN START
  // JE DOIS ENLEVER LES ENDPOINTS POUR CHARGER LA PAGE ET LES DATA ET ENSUITES LES REMETTRES
  // IMPOSSIBLE DE LE FAIRE AU CHARGEMENT DE LA PAGE

  useEffect(() => {
    fetch(loadData)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [loadData]);*/
  const users = {
    data: {
      id: 18,
      userInfos: { firstName: "Cecilia", lastName: "Ratorez", age: 34 },
      score: 0.3,
      keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120,
      },
    },
  };

  //const keyData = users.data.keyData;
  const userInfos = users.data.userInfos;

  return (
    <main className="profile-page">
      <h1 className="profile-title-name">
        Bonjour <span className="userName-title">{userInfos.firstName}</span>
      </h1>
      <p className="profile-msg">
        Félicitation vous avez explosez vos objectifs hier !
      </p>
      <div className="profile-row-graphic">
        <DailyActivitiesGraph />
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
