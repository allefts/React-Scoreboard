import React, { useState, useEffect } from "react";

const TimerFunction = ({ minutes, seconds }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    //THIS WILL RUN EVERY TIME AFTER THE COMPONENT RENDERS
    setTimeLeft(minutes * 60 + seconds);
  });

  var min = Math.floor(timeLeft / 6000).toFixed(0);
  var sec = timeLeft % 60;

  const startStop = (e) => {
    e.preventDefault();
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <p>{min}</p>
      <p>:</p>
      <p>{sec}</p>
      <button>{active === true ? "Stop" : "Start"}</button>
    </div>
  );
};

export default TimerFunction;
