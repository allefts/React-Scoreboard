import React, { Component } from "react";
import StartStopTimer from "./StartStopTimer";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 0,
      seconds: 0,
    };

    // let minutes;
    // let seconds;

    this.handleTimerChange = this.handleTimerChange.bind(this);
    this.sendTimerChange = this.sendTimerChange.bind(this);
  }

  handleTimerChange(e) {
    e.target.name === "minutes"
      ? (this.minutes = e.target.value)
      : (this.seconds = e.target.value);
  }

  sendTimerChange(e) {
    this.setState({ minutes: this.minutes, seconds: this.seconds });
  }

  render() {
    return (
      <div>
        <StartStopTimer
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />
        <form action="form">
          <input
            type="number"
            min="0"
            max="60"
            name="minutes"
            onChange={this.handleTimerChange}
          />
          <input
            type="number"
            min="0"
            max="60"
            name="seconds"
            onChange={this.handleTimerChange}
          />

          <button type="reset" onClick={this.sendTimerChange}>
            Set Time:
          </button>
        </form>
      </div>
    );
  }
}

export default Clock;
