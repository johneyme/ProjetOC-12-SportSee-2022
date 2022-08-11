import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
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

  let kilogramAvg = 0;

  function calculateKilogramAverage() {
    let kilogramSum = 0;
    let numOfActivity = 0;

    sessions.forEach((session) => {
      numOfActivity += 1;
      kilogramSum += session.kilogram;
    });

    kilogramAvg = Math.round(kilogramSum / numOfActivity);
  }
  calculateKilogramAverage();

  return (
    <div className="barchart-graph">
      <div className="barchart-graph-header">
        <h3>Activité quotidienne</h3>
        <ul>
          <li>Poids (kg)</li>
          <li>Calories brûlées (kCal)</li>
        </ul>
      </div>
      <BarChart width={700} height={200} data={sessions}>
        <XAxis
          dataKey="day"
          stroke="#DEDEDE"
          tick={{ fill: "#9B9EAC" }}
          axisLine={true}
        />
        <YAxis
          dataKey="kilogram"
          ticks={[kilogramAvg - 2, kilogramAvg, kilogramAvg + 2]}
          tick={{ fill: "#9B9EAC" }}
          domain={[kilogramAvg - 2, kilogramAvg + 2]}
          axisLine={false}
          orientation={"right"}
        />
        <Tooltip />

        <CartesianGrid stroke="#DEDEDE" strokeDasharray={3} vertical={false} />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          barSize={10}
          radius={[25, 25, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          barSize={10}
          radius={[25, 25, 0, 0]}
        />
      </BarChart>
    </div>
  );
}

export default DailyActivitiesGraph;
