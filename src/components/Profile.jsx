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
import user from "../mock/userData";

function Profile() {
  const userInfos = user.data.userInfos;
  const keyData = user.data.keyData;

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
          <DailyActivitiesGraph />
          <AverageLineGraph />
          <RadarGraph />
          <ScoreGraph />
        </div>
        <div className="profile-row__info">
          <InfoCase
            img={logoFlame}
            count={keyData.calorieCount}
            category="Calories"
            color="#FF000007"
          />
          <InfoCase
            img={logoChicken}
            count={keyData.proteinCount}
            category="Proteines"
            color="#4ab7ff10"
          />
          <InfoCase
            img={logoApple}
            count={keyData.carbohydrateCount}
            category="Glucides"
            color="#FDCC0C10"
          />
          <InfoCase
            img={logoBurger}
            count={keyData.lipidCount}
            category="Calories"
            color="#FD518110"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
