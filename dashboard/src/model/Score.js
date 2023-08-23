/**Constructor Pattern - Score
 * @constructor
 * @param {object} score - A score
 * @param {object} data contains Users data
 */
export class Score {
  constructor(userId, data) {
    this._userId = userId;
    this._data = data.userMainData;
  }

  /**
   * Get the name
   *
   * @return  {string} name
   */
  get name() {
    return "score";
  }

  /**
   * Get  user score
   *
   * @return  {number} score number
   */
  get score() {
    let score = 0;
    this._data.forEach((element) => {
      if (element.userId === parseInt(this._userId)) {
        score = element.todayScore;
      }
    });
    // console.log("score::", score);
    return score;
  }
}
