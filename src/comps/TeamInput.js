import React from "react";
import "/home/allefts/Documents/React/improved-scoreboard-hopefully/src/App.css";

const TeamInput = ({
  changeTeamName,
  clickChangeTeamName,
  displayedTeam1Name,
  displayedTeam2Name,
}) => {
  return (
    <div>
      <form>
        <div className="teamWrapper">
          <h2>Home</h2>
          <h3>{displayedTeam1Name}</h3>

          <h3>{displayedTeam2Name}</h3>
          <h2>Away</h2>
        </div>
        <div className="inputWrapper">
          <input
            name="Home"
            type="text"
            placeholder="Change Home Team Name"
            onChange={changeTeamName}
          />
          <button
            className="reset-btn"
            type="reset"
            onClick={clickChangeTeamName}
          >
            Set Team Names
          </button>
          <input
            name="Away"
            type="text"
            placeholder="Change Away Team Name"
            onChange={changeTeamName}
            className="inputToggle"
          />
        </div>
      </form>
    </div>
  );
};

export default TeamInput;
