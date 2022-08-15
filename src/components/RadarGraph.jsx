import {
  RadarChart,
  PolarAngleAxis,
  Radar,
  PolarGrid,
  PolarRadiusAxis,
  // ResponsiveContainer,
} from "recharts";
import "../style/RadarGraph.css";

function RadarGraph() {
  const users = {
    data: {
      userId: 18,
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity",
      },
      data: [
        { value: 200, kind: 1 },
        { value: 240, kind: 2 },
        { value: 80, kind: 3 },
        { value: 80, kind: 4 },
        { value: 220, kind: 5 },
        { value: 110, kind: 6 },
      ],
    },
  };

  const performance = users.data;

  return (
    <div className="radar-graph">
      <RadarChart
        outerRadius={90}
        width={200}
        height={200}
        data={performance.data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" stroke={`#fff`} />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar name="Radar" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </div>
  );
}

export default RadarGraph;
