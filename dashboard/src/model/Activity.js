import { formatData, translateToFr } from "../utils/index.js";

/**
 * Constructor Pattern - Activity
 */
export class Activity {
  constructor(userId, data) {
    this._userId = userId;
    this._data = data.userPerformances;
    console.log("Model::", this._data);
  }

  /**
   * Formats data and get the activities for specified user
   * @return {Array.<Object>} {activity: string, value:number}
   */
  get _activities() {
    let result = {};
    this._data.forEach((performance) => {
      if (performance.userId === parseInt(this._userId)) {
        result = { ...performance };
      }
    });
    return formatData(result);
  }
}
