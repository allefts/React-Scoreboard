import React from "react";
import "/home/allefts/Documents/React/improved-scoreboard-hopefully/src/App.css";

const Score = ({ handleScores, homeTeamScore, awayTeamScore, name }) => {
  const clickedTeam = name;

  return (
    <div>
      <button
        className="scoreBtnPlus defBtn"
        value="+"
        onClick={(e) => {
          handleScores(e, clickedTeam);
        }}
      >
        +
      </button>

      {/* HAVE TO FIGURE OUT WHAT HEADING TO DISPLAY, HOW TO DIFFERENTIATE WHEN WE HAVE HOMETEAM SCORE AND AWAY TEAM SCORE */}

      <button
        className="scoreBtnMinus defBtn"
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
