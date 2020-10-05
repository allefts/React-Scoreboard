import React, { useState } from "react";
// import StartStopTimer from "./StartStopTimer";
import Timer from "./TimerFunction";

const Clock = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [submittedMinutes, setSubmittedMinutes] = useState(0);
  const [submittedSeconds, setSubmittedSeconds] = useState(0);

  const submit = () => {
    setSubmittedMinutes(minutes);
    setSubmittedSeconds(seconds);
  };

  return (
    <>
      <Timer minutes={submittedMinutes} seconds={submittedSeconds} />
      <div>
        <form action="form">
          <input
            type="number"
            min="0"
            max="60"
            name="minutes"
            value={minutes}
            onChange={(e) => {
              setMinutes(e.target.value);
            }}
          />
          <input
            type="number"
            min="0"
            max="60"
            name="seconds"
            value={seconds}
            onChange={(e) => {
              setSeconds(e.target.value);
            }}
          />

          <button type="reset" onClick={submit}>
            Set Time:
          </button>
        </form>
      </div>
    </>
  );
};

export default Clock;
