import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

function DailyActivitiesGraph() {
  const data = [
    { name: "1", poids: 60, calories: 380 },
    { name: "2", poids: 62, calories: 100 },
    { name: "3", poids: 61, calories: 400 },
    { name: "4", poids: 60, calories: 450 },
    { name: "5", poids: 59, calories: 700 },
    { name: "6", poids: 63, calories: 50 },
    { name: "7", poids: 65, calories: 70 },
    { name: "8", poids: 68, calories: 20 },
    { name: "9", poids: 63, calories: 1200 },
    { name: "10", poids: 61, calories: 1000 },
  ];

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis dataKey="poids" />

      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="poids" fill="#282D30" barSize={10} />
      <Bar dataKey="calories" fill="#E60000" barSize={10} />
    </BarChart>
  );
}

export default DailyActivitiesGraph;
