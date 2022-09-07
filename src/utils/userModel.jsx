/**
 * @param  {Number} id
 * @param  {Object} keyData
 * @param  {Number} score
 * @param  {Object} userInfos
 * @
 */ // Class UserModel to order data user, receive in fetchData
class UserModel {
  constructor(data) {
    this.id = data.data.id;
    this.keyData = data.data.keyData;
    if (data.data.score) {
      this.score = data.data.score;
    } else {
      this.score = data.data.todayScore;
    }
    this.userInfos = data.data.userInfos;
  }
}

export default UserModel;
