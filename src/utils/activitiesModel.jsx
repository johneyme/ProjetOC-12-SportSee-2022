/**
 * @param  {Number} userId
 * @param  {Array} sessions
 * @
 */ // Class ActivitiesModel to order activities data, receive in fetchData
class ActivitiesModel {
  constructor(data) {
    this.sessions = data.data.sessions;
    this.userId = data.data.userId;
  }
}

export default ActivitiesModel;
