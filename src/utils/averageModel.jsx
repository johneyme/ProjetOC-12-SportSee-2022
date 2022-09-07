/**
 * @param  {Number} userId
 * @param  {Array} sessions
 * @
 */ // Class averageModel to order average data, receive in fetchData
class AverageModel {
  constructor(data) {
    this.sessions = data.data.sessions;
    this.userId = data.data.userId;
  }
}

export default AverageModel;
