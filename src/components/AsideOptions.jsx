// Logo buttons import
import imgZen from "../assets/button-zen.svg";
import imgSwim from "../assets/button-swim.svg";
import imgBike from "../assets/button-bike.svg";
import imgMuscle from "../assets/button-muscle.svg";

import "../style/AsideOptions.css";

function AsideOptions() {
  return (
    <aside className="aside-options">
      <button>
        <img src={imgZen} alt="bouton Zen"></img>
      </button>
      <button>
        <img src={imgSwim} alt="bouton Zen"></img>
      </button>
      <button>
        <img src={imgBike} alt="bouton Zen"></img>
      </button>
      <button>
        <img src={imgMuscle} alt="bouton Zen"></img>
      </button>
      <p className="copiryght">Copiryght, SportSee 2020</p>
    </aside>
  );
}

export default AsideOptions;
