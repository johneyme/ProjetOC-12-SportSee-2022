import "../Profile/Profile.css";
import DailyActivitiesGraph from "../Graphics/DailyActivitiesGraph/DailyActivitiesGraph";
import ScoreGraph from "../Graphics/ScoreGraph/ScoreGraph";
import RadarGraph from "../Graphics/RadarGraph/RadarGraph";
import AverageLineGraph from "../Graphics/AverageLineGraph/AverageLineGraph";
import InfoCase from "../InfoCase/InfoCase";
import logoFlame from "../../assets/logo-flame.svg";
import logoChicken from "../../assets/logo-chicken.svg";
import logoApple from "../../assets/logo-apple.svg";
import logoBurger from "../../assets/logo-burger.svg";
import PropTypes from "prop-types";
//import user from "../mock/userData";

/**
 * Profile components
 * @description Displays the main components with all graphics and user informations.
 */

function Profile(user) {
  /**
   * @constant messageToUser
   * Welcome text
   */
  const messageToUser =
    "Félicitation ! Vous avez explosé vos objectifs hier 👏";

  const users = user.users;
  const activities = user.activities;
  const average = user.average;
  const performances = user.performances;

  const userInfos = users.data.userInfos;
  const keyData = users.data.keyData;

  return (
    <section className="profile">
      <h1 className="profile-page__title">
        Bonjour <span className="userName-title">{userInfos.firstName}</span>
      </h1>
      <p className="profile-page__message">{messageToUser}</p>
      <div className="profile-row">
        <div className="profile-row__graphic">
          <DailyActivitiesGraph activities={activities} />
          <div className="profile-row__squareGraphics">
            <AverageLineGraph average={average} />
            <RadarGraph performances={performances} />
            <ScoreGraph users={users} />
          </div>
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

Profile.propTypes = {
  userInfos: PropTypes.object,
  keyData: PropTypes.object,
  users: PropTypes.object,
  performances: PropTypes.object,
  average: PropTypes.object,
  activities: PropTypes.object,
};

export default Profile;
