/**Constructor Pattern - Sessions Chart
 * @constructor
 * @param {string} userId  userId
 * @param {object} data contains all data
 */
export class Session {
  constructor(userId, data) {
    this.userId = userId;
    this.data = data;
  }
  /**
   * Formats User sessions from initial data
   *
   * @return  {{day: string, sessionLength:number}}   formatted sessions
   */
  get _sessions() {
    let sessions = [];
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    days.map((user) => {
      if (user.userId === parseInt(this._userId)) {
        const item = user.sessions;
        item.map((session) => {
          sessions.push({
            day: days[session.day - 1],
            sessionLength: session.sessionLength,
          });
        });
      }
    });

    return sessions;
  }
}
