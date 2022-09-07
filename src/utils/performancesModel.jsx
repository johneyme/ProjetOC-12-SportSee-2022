/**
 * @param  {Array} data
 * @param  {Object} kind
 * @param  {Number} userId
 * @
 */ // Class Performance model to order performance user, receive in fetchData
class PerformanceModel {
  constructor(data) {
    this.data = data.data.data;
    this.kind = data.data.kind;
    this.userId = data.data.userId;
  }
}
export default PerformanceModel;
