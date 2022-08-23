import "../style/Profile.css";
import DailyActivitiesGraph from "./DailyActivitiesGraph";
import ScoreGraph from "./ScoreGraph";
import RadarGraph from "./RadarGraph";
import AverageLineGraph from "./AverageLineGraph";
import InfoCase from "./InfoCase";
import logoFlame from "../assets/logo-flame.svg";
import logoChicken from "../assets/logo-chicken.svg";
import logoApple from "../assets/logo-apple.svg";
import logoBurger from "../assets/logo-burger.svg";
//import user from "../mock/userData";

function Profile(props) {
  const users = props.users;
  const activities = props.activities;
  const average = props.average;
  const performances = props.performances;

  const userInfos = users.data.userInfos;
  const keyData = users.data.keyData;

  return (
    <section className="profile">
      <h1 className="profile-page__title">
        Bonjour <span className="userName-title">{userInfos.firstName}</span>
      </h1>
      <p className="profile-page__message">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
      <div className="profile-row">
        <div className="profile-row__graphic">
          <DailyActivitiesGraph activities={activities} />
          <AverageLineGraph average={average} />
          <RadarGraph performances={performances} />
          <ScoreGraph users={users} />
        </div>
        <div className="profile-row__info">
          <InfoCase
            img={logoFlame}
            count={keyData.calorieCount}
            type="Kcal"
            category="Calories"
            color="#FF000007"
          />
          <InfoCase
            img={logoChicken}
            count={keyData.proteinCount}
            type="g"
            category="Proteines"
            color="#4ab7ff10"
          />
          <InfoCase
            img={logoApple}
            count={keyData.carbohydrateCount}
            type="g"
            category="Glucides"
            color="#FDCC0C10"
          />
          <InfoCase
            img={logoBurger}
            count={keyData.lipidCount}
            type="g"
            category="Calories"
            color="#FD518110"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
