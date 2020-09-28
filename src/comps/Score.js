import React from "react";

const Score = ({ handleScores, homeTeamScore, awayTeamScore, name }) => {
  const clickedTeam = name;

  return (
    <div>
      <button
        value="+"
        onClick={(e) => {
          handleScores(e, clickedTeam);
        }}
      >
        +
      </button>

      {/* HAVE TO FIGURE OUT WHAT HEADING TO DISPLAY, HOW TO DIFFERENTIATE WHEN WE HAVE HOMETEAM SCORE AND AWAY TEAM SCORE */}

      <button
        value="-"
        onClick={(e) => {
          handleScores(e, clickedTeam);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Score;
