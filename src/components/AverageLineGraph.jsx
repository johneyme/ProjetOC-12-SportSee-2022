import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "../style/AverageLineGraph.css";

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

  return (
    <div className="average-line-graph">
      <div className="average-line-graph__title">
        Durée moyenne des sessions
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={sessions}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <YAxis
            hide={true}
            domain={["dataMin-20", "dataMax+40"]}
            tickLine={false}
            axisLine={false}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#ffffff7a" }}
          />
          <Tooltip
            itemStyle={{
              color: "black",
            }}
            formatter={(value, name, unit) => [value, unit]}
            labelStyle={{ display: "none" }}
            cursor={{
              stroke: "black",
              strokeOpacity: 0.1,
              strokeWidth: 70,
              height: 100,
            }}
          />
          <Line
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            unit="min"
            dot={false}
            activeDot={{
              fill: "white",
              stroke: "white",
              strokeOpacity: 0.2,
              strokeWidth: 15,
              r: 5,
            }}
            legendType="none"
            type="natural"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageLineGraph;

/*<LineChart
          data={sessions}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid horizontal="" vertical="" />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#FFFFFF" }}
          />
          <YAxis
            hide={true}
            domain={["dataMin-20", "dataMax+40"]}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            itemStyle={{
              color: "black",
            }}
            formatter={(value, name, unit) => [value, unit]}
            labelStyle={{ display: "none" }}
            cursor={{
              stroke: "black",
              strokeOpacity: 0.1,
              strokeWidth: 70,
              height: 100,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            unit="min"
            dot={false}
            activeDot={{
              fill: "white",
              stroke: "white",
              strokeOpacity: 0.2,
              strokeWidth: 15,
              r: 5,
            }}
          />
        </LineChart>*/
