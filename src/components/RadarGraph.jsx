import {
  RadarChart,
  PolarAngleAxis,
  Radar,
  PolarGrid,
  PolarRadiusAxis,
  // ResponsiveContainer,
} from "recharts";
import "../style/RadarGraph.css";
//import userPerformance from "../mock/userPerformance";

function RadarGraph(props) {
  const performance = props.performances.data;

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
        <Radar
          name="performance"
          dataKey="value"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </div>
  );
}

export default RadarGraph;
