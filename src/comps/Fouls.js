import React, { useState, useEffect } from "react";

const Fouls = ({ resetFouls }) => {
  const [fouls, setFouls] = useState(0);

  useEffect(() => {
    setFouls(0);
  }, [resetFouls]);

  return (
    <div>
      <button value="+" onClick={() => setFouls(fouls + 1)}>
        +
      </button>
      <h1>{fouls}</h1>
      <button
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
  );
};

export default Fouls;
