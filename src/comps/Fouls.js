import React, { useState } from "react";
import "../App.css";

const Fouls = () => {
  const [fouls, setFouls] = useState(0);

  return (
    <div>
      <h1 className="foulsCount">{fouls}</h1>
      <div>
        <button
          className="foulBtnPlus defBtn"
          value="+"
          onClick={() => setFouls(fouls + 1)}
        >
          +
        </button>
        <button
          className="foulBtnMinus defBtn"
          value="-"
          onClick={() => {
            if (fouls !== 0) {
              setFouls(fouls - 1);
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Fouls;
