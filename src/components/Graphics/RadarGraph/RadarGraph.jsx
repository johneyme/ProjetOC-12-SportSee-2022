import {
  RadarChart,
  PolarAngleAxis,
  Radar,
  PolarGrid,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import "../../../style/ResponsiveSquareGraph.css";
import "./RadarGraph.css";

/**
 * @param {object} userPerformance
 * @returns  radar graphic about differents skills from the user
 */

function RadarGraph(userPerformance) {
  const performances = userPerformance.performances.data;

  const kindName = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];
  for (let i = 0; i < 6; i++) {
    performances[i].kind = kindName[i];
  }

  return (
    <div className="radar-graph sizeGraph bloc">
      <ResponsiveContainer className={"content"} width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={performances}>
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

RadarGraph.propTypes = {
  performance: PropTypes.array,
};

export default RadarGraph;
