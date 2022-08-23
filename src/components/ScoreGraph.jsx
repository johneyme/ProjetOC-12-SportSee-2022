import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import "../style/ScoreGraph.css";
//import userData from "../mock/userData";

function ScoreGraph(props) {
  const score = props.users.data.score;

  const userScore = [{ score: score * 100 }];

  return (
    <div className="score-graph">
      <h3 className="score-graph__title">Score</h3>
      <div className="score-graph__content">
        <span className="score">
          {userScore[0].score}% <br />{" "}
        </span>
        <span className="score-text">
          de votre <br />
          objectif
        </span>
      </div>
      <RadialBarChart
        width={200}
        height={200}
        innerRadius="85%"
        outerRadius="100%"
        data={userScore}
        startAngle={90}
        deprecated
        endAngle={450}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          fill="#FF0000"
          background={{ fill: "#fbfbfb" }}
          clockWise={true}
          dataKey="score"
          cornerRadius={10}
        />
      </RadialBarChart>
    </div>
  );
}

export default ScoreGraph;
