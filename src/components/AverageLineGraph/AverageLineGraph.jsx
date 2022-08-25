import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./AverageLineGraph.css";
//import userAverage from "../mock/userAverage";

function AverageLineGraph(props) {
  const average = props.average.data.sessions;

  const numberOfDay = ["L ", "M ", "M ", "J ", "V ", "S ", "D "];

  return (
    <div className="average-line-graph">
      <div className="average-line-graph__title">
        Durée moyenne des sessions
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={average}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
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

          <XAxis hide={true} />

          <YAxis
            hide={true}
            domain={["dataMin-20", "dataMax+40"]}
            tickLine={false}
            axisLine={false}
          />
          <text
            x="50%"
            y="95%"
            textAnchor="middle"
            textLength="90%"
            fontSize="12"
            fontWeight="500"
            fill="#ffffff7a"
          >
            {numberOfDay}
          </text>

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
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageLineGraph;
