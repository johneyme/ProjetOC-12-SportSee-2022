import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "./ScoreGraph.css";
import "../../../style/ResponsiveSquareGraph.css";
//import userData from "../mock/userData";

function ScoreGraph(props) {
  let score;
  if (props.users.data.score) {
    score = props.users.data.score;
  } else {
    score = props.users.data.todayScore;
  }

  const userScore = [{ score: score * 100 }];
  const newScore = score * 100;

  return (
    <div className="score-graph sizeGraph bloc">
      <h3 className="score-graph__title">Score</h3>
      <ResponsiveContainer className={"content"} width="100%" height="100%">
        <RadialBarChart
          data={userScore}
          innerRadius={80}
          barSize={10}
          startAngle={90}
          endAngle={450}
          fill={"#FF0000"}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="score" cornerRadius={10} background />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fontSize="26"
            fontWeight="700"
            fill="black"
          >
            {newScore}%
          </text>
          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            fontSize="16"
            fill="gray"
            fontWeight="500"
          >
            de votre
          </text>
          <text
            x="50%"
            y="66%"
            textAnchor="middle"
            fontSize="16"
            fill="#74798C"
            fontWeight="500"
          >
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScoreGraph;
