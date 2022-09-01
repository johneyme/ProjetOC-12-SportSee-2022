import "./InfoCase.css";
import PropTypes from "prop-types";

/**
 * InfoCase Components(components on the right on Profile page)
 * @description display userInformations with icons
 * @returns InfoCase components based on props in Profile Components
 */

function InfoCase({ img, count, category, color, type }) {
  return (
    <div className="info-case">
      <div className="info-case__leftside" style={{ backgroundColor: color }}>
        <img className="info-case__logo" src={img} alt={"logo de" + img}></img>
      </div>
      <div className="info-case__rightside">
        <p>
          {count}
          {type}
          <br />
          <span>{category}</span>
        </p>
      </div>
    </div>
  );
}

InfoCase.propTypes = {
  count: PropTypes.number,
  type: PropTypes.string,
};

export default InfoCase;
