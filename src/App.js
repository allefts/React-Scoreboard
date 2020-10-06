import React, { useState } from "react";
import "./App.css";
import Score from "./comps/Score";
import TeamInput from "./comps/TeamInput";
import Fouls from "./comps/Fouls";
import Clock from "./comps/Clock";

const App = () => {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  const [team1Name, setTeam1Name] = useState("");
  const [team2Name, setTeam2Name] = useState("");

  const [displayedTeam1Name, setDisplayedTeam1Name] = useState("");
  const [displayedTeam2Name, setDisplayedTeam2Name] = useState("");

  const changeTeamName = (e) => {
    const team = e.target.name;
    team === "Home"
      ? setTeam1Name(e.target.value)
      : setTeam2Name(e.target.value);

    // console.log("Home Team:" + team1Name);
    // console.log("Away Team:" + team2Name);
  };

  const clickChangeTeamName = (e) => {
    setDisplayedTeam1Name(team1Name);
    setDisplayedTeam2Name(team2Name);
  };

  const handleScores = (e, team) => {
    if (e.target.value === "+") {
      team === "Home"
        ? setTeam1Score(team1Score + 1)
        : setTeam2Score(team2Score + 1);
    } else if (e.target.value === "-") {
      if (!checkScore(team)) {
        team === "Away"
          ? setTeam2Score(team2Score - 1)
          : setTeam1Score(team1Score - 1);
      }
    }
  };

  const checkScore = (team) => {
    if (
      (team === "Home" && team1Score - 1 < 0) ||
      (team === "Away" && team2Score - 1 < 0)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const reset = () => {
    //reset needs to also reset fouls and time
    setTeam1Score(0);
    setTeam2Score(0);
  };

  return (
    <div>
      <TeamInput
        changeTeamName={changeTeamName}
        clickChangeTeamName={clickChangeTeamName}
        displayedTeam1Name={displayedTeam1Name}
        displayedTeam2Name={displayedTeam2Name}
      />

      <Score
        handleScores={handleScores}
        name="Home"
        homeTeamScore={team1Score}
      />
      <h1>{team1Score}</h1>
      <Score
        handleScores={handleScores}
        name="Away"
        awayTeamScore={team2Score}
      />
      <h1>{team2Score}</h1>
      <button onClick={reset}>Reset</button>

      <h2 className="fouls-header">Fouls</h2>
      <Fouls name="Home" />
      <Fouls name="Away" />

      <Clock />
    </div>
  );
};

export default App;
