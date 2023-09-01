import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Score } from "../../model/Score";
import "./ScoreUser.css";
function ScoreUser({ userId, data, api = false }) {
  //scoreData
  const scoreData = new Score(userId, data, api);
  // console.log(scoreData);
  const pieData = [
    {
      name: "completed",
      value: scoreData.score,
      fillColor: "var(--color--primary)",
    },
    {
      name: "not-completed",
      value: 1 - scoreData.score,
      fillColor: "transparent",
    },
  ];
  console.log(pieData);
  return (
    <div className="scoreContainer">
      <h3>Score</h3>
      {/* <ResponsiveContainer width="700" height="700"> */}
      <PieChart width={160} height={160}>
        <Pie
          data={pieData}
          dataKey="value"
          innerRadius={67}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.fillColor}
              cornerRadius="50%"
            />
          ))}
        </Pie>
      </PieChart>
      {/* </ResponsiveContainer> */}
      <p>
        <span>{scoreData.score}</span> <br /> de votre <br />
        objectif
      </p>
    </div>
  );
}

export default ScoreUser;
