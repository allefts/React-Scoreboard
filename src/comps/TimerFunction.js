import React, { useState, useEffect, useRef } from "react";

const TimerFunction = ({ minutes, seconds }) => {
  const [min, setMin] = useState(minutes);
  const [sec, setSec] = useState(seconds);
  const [active, setActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    setMin(minutes);
  }, [minutes]);

  useEffect(() => {
    setSec(seconds);
  }, [seconds]);

  useEffect(() => {
    console.log(min, sec);
    setTimeLeft(min * 60 + sec * 1); //FOR SOME REASON IF I DIDNT MULTIPLY THE SECONDS BY 1, IT WOULD SET THE TIME TO 10X WHAT IT WAS SUPPOSOED TO BE
  }, [min, sec]);

  // 3 20s
  // 60000 * 3 + 20000 -- 182000
  //NEED TO SWITCH THE BELOW CODE, BECAUSE TIMELEFT IS DECREASING BY 61 EACH SECOND BECAUSE ONE MINUTE AND SECOND ARE GETTING TAKEN OFF EACH INTERVAL

  useEffect(() => {
    if (active === true) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft > 0) {
            return timeLeft - 1;
          }
          return timeLeft;
        });
      }, 1000);
    } else if (active === false || timeLeft === 60) {
      clearInterval(intervalRef.current);
    }
  }, [active]);

  //BETTER WAY TO DO THE STUFF BELOW? THERE IS BUT DONT WANNA FIND OUT RN

  const checkMinutes = (timeLeft) => {
    if (timeLeft < 60 && timeLeft > 0) {
      return timeLeft % 60 < 10
        ? `0${Math.floor(timeLeft % 60)}`
        : Math.floor(timeLeft % 60);
    } else {
      return timeLeft / 60 < 10
        ? `0${Math.floor(timeLeft / 60)}`
        : Math.floor(timeLeft / 60);
    }
  };

  const checkSeconds = (timeLeft) => {
    if (timeLeft < 60 && timeLeft > 0) {
      //TODO
    } else {
      return timeLeft % 60 < 10
        ? `0${Math.floor(timeLeft % 60)}`
        : Math.floor(timeLeft % 60);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <p>
        {checkMinutes(timeLeft)}
        {/* {timeLeft / 60 < 10
          ? `0${Math.floor(timeLeft / 60)}`
          : Math.floor(timeLeft / 60)} */}
      </p>
      <p>{timeLeft < 60 ? `.` : `:`}</p>
      <p>
        {checkSeconds(timeLeft)}
        {/* {timeLeft % 60 < 10
          ? `0${Math.floor(timeLeft % 60)}`
          : Math.floor(timeLeft % 60)} */}
      </p>
      <button
        onClick={() => (active === true ? setActive(false) : setActive(true))}
      >
        {active === true && timeLeft !== 0 ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default TimerFunction;
