import React, { useState, useEffect, useRef } from "react";

const TimerFunction = ({ minutes, seconds }) => {
  const [min, setMin] = useState(minutes);
  const [sec, setSec] = useState(seconds);
  const [active, setActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    setMin(minutes);
    console.log(minutes);
  }, [minutes]);

  useEffect(() => {
    setSec(seconds);
  }, [seconds]);

  useEffect(() => {
    setTimeLeft(min * 60 + sec);
    console.log(timeLeft);
  }, [min, sec]);
  // 3 20s
  // 60000 * 3 + 20000 -- 182000
  //NEED TO SWITCH THE BELOW CODE, BECAUSE TIMELEFT IS DECREASING BY 61 EACH SECOND BECAUSE ONE MINUTE AND SECOND ARE GETTING TAKEN OFF EACH INTERVAL

  useEffect(() => {
    if (active) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(() => {
          if (timeLeft > 0) {
            return timeLeft - 1;
          }
          return timeLeft;
        });
        // setMin((min) => {
        //   if (min > 0) {
        //     return min - 1;
        //   }
        //   return min;
        // });
        // setSec((sec) => {
        //   if (sec > 0) {
        //     return sec - 1;
        //   }
        //   return sec;
        // });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // return () => clearInterval(interval);
  }, [active, timeLeft]);

  // var min = Math.floor(timeLeft / 6000).toFixed(0);
  // var sec = timeLeft % 60;

  return (
    <div style={{ display: "flex" }}>
      <p>{Math.floor(timeLeft / 6000)}</p>
      <p>:</p>
      <p>{Math.floor(timeLeft % 60)}</p>
      <button onClick={() => setActive(!active)}>
        {active === true ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default TimerFunction;
