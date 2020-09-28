import React from "react";

const TeamInput = ({
  changeTeamName,
  clickChangeTeamName,
  displayedTeam1Name,
  displayedTeam2Name,
}) => {
  return (
    <div>
      <h2>Home Team: </h2>
      <h1>{displayedTeam1Name}</h1>
      <input
        name="Home"
        type="text"
        placeholder="Change Home Team Name"
        onChange={changeTeamName}
      />

      <h2>Away Team: </h2>
      <h1>{displayedTeam2Name}</h1>
      <input
        name="Away"
        type="text"
        placeholder="Change Away Team Name"
        onChange={changeTeamName}
      />

      <button onClick={clickChangeTeamName}>Set Team Names</button>
    </div>
  );
};

export default TeamInput;
