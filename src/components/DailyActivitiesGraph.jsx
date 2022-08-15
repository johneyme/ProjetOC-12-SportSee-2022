import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../style/DailyActivitiesGraph.css";

function DailyActivitiesGraph() {
  const sessions = [
    { day: "2020-07-01", kilogram: 70, calories: 240 },
    { day: "2020-07-02", kilogram: 69, calories: 220 },
    { day: "2020-07-03", kilogram: 70, calories: 280 },
    { day: "2020-07-04", kilogram: 68, calories: 500 },
    { day: "2020-07-05", kilogram: 69, calories: 160 },
    { day: "2020-07-06", kilogram: 69, calories: 162 },
    { day: "2020-07-07", kilogram: 69, calories: 390 },
  ];

  const contentStyle = { color: "#74798c", fontSize: "14px" };

  const renderLegend = (value) => {
    return <span style={contentStyle}>{value}</span>;
  };
  return (
    <div className="barchart-graph">
      <div className="activity-graph__title">Activité quotidienne</div>
      <ResponsiveContainer width="99%" height={320}>
        <BarChart
          data={sessions}
          margin={{ top: 60, right: 20, left: 20, bottom: 20 }}
          style={contentStyle}
        >
          <CartesianGrid
            strokeDasharray="2"
            vertical={false}
            stroke="#DEDEDE"
          />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            tickSize={15}
            stroke="#DEDEDE"
          />

          <YAxis yAxisId="left" orientation="left" hide={true} />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickSize={30}
            domain={["dataMin - 2", "dataMax + 2"]}
            stroke="#9B9EAC"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#E60000",
            }}
            itemStyle={{
              color: "white",
            }}
            labelStyle={{ display: "none" }}
            formatter={(value, name, unit) => [value, unit]}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize={12}
            height={40}
            formatter={renderLegend}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (kg)"
            unit="kg"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (kcal)"
            unit="kcal"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivitiesGraph;
