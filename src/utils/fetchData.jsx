/*import mockUser from "../mock/userData";
import mockActivities from "../mock/userActivity";
import mockAverage from "../mock/userAverage";
import mockPerformances from "../mock/userPerformance";*/

import UserModel from "../utils/userModel";

/**
 * @async
 * @function fetchAll
 * @description Executes a series of asynchronous component functions (to receive data)
 * @using in UserPage.jsx useEffect component
 *
 */

function fetchAll(setUsers) {
  // UserId search in Url bar
  const queryString = window.location.search;
  const userId = new URLSearchParams(queryString).get("id");

  // Fetch use to load data user
  const loadUsers = `http://localhost:3000/user/${userId}`;
  const loadActivities = `http://localhost:3000/user/${userId}/activity`;
  const loadAverage = `http://localhost:3000/user/${userId}/average-sessions`;
  const loadPerformance = `http://localhost:3000/user/${userId}/performance`;

  const fetchData = async () => {
    const responseUser = await fetch(loadUsers);
    const responseActivities = await fetch(loadActivities);
    const responseAverage = await fetch(loadAverage);
    const responsePerformance = await fetch(loadPerformance);

    const newDataUser = await responseUser.json();
    const newDataActivities = await responseActivities.json();
    const newDataAverage = await responseAverage.json();
    const newDataPerformance = await responsePerformance.json();

    let user = new UserModel(
      newDataUser,
      newDataActivities,
      newDataAverage,
      newDataPerformance

      // To Mock Use: uncomment code line 1-4 & 44-48; and comment line 38-42
      /* mockUser,
      mockActivities,
      mockAverage,
      mockPerformances*/
    );
    setUsers(user);
  };

  fetchData();
}

export default fetchAll;
