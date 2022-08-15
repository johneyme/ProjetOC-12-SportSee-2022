import { LineChart, CartesianGrid, XAxis, YAxis, Line } from "recharts";
import "../style/RadarGraph.css";

function AverageLineGraph() {
  const users = {
    data: {
      userId: 18,
      sessions: [
        { day: 1, sessionLength: 30 },
        { day: 2, sessionLength: 40 },
        { day: 3, sessionLength: 50 },
        { day: 4, sessionLength: 30 },
        { day: 5, sessionLength: 30 },
        { day: 6, sessionLength: 50 },
        { day: 7, sessionLength: 50 },
      ],
    },
  };

  const sessions = users.data.sessions;
  console.log(sessions);

  return (
    <div className="average-line-graph">
      <LineChart
        width={730}
        height={250}
        data={sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default AverageLineGraph;
