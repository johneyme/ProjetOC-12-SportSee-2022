import {
  RadarChart,
  PolarAngleAxis,
  Radar,
  PolarGrid,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import "../../../style/ResponsiveSquareGraph.css";
import "./RadarGraph.css";
//import userPerformance from "../mock/userPerformance";

function RadarGraph(props) {
  const performance = props.performances.data;

  const kindName = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];
  for (let i = 0; i < 6; i++) {
    performance.data[i].kind = kindName[i];
  }

  return (
    <div className="radar-graph sizeGraph bloc">
      <ResponsiveContainer className={"content"} width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={performance.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickSize={10}
            tick={{
              fill: "white",
              fontSize: 12,
              fontWeight: 500,
              y: 200,
            }}
          />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar
            name="performance"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarGraph;
