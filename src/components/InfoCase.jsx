import "../style/InfoCase.css";

function InfoCase({ img, count, category, color }) {
  return (
    <div className="info-case">
      <div className="info-case__leftside" style={{ backgroundColor: color }}>
        <img className="info-case__logo" src={img} alt={"logo de" + img}></img>
      </div>
      <div className="info-case__rightside">
        <p>{count}</p>
        <h5>{category}</h5>
      </div>
    </div>
  );
}

export default InfoCase;
