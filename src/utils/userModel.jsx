/**
 * @param  {Array} users
 * @param  {Array} activities
 * @param  {Array} average
 * @param  {Array} performances
 * @
 */ // Class UserModel to order data user, receive in fetchData
class UserModel {
  constructor(users, activities, average, performances) {
    this.users = users.data;
    this.activities = activities.data;
    this.average = average.data;
    this.performances = performances.data;
  }
}

export default UserModel;
