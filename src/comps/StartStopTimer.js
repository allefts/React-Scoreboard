import React, { Component } from "react";

class StartStopTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      timeLeft: 0,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer(e) {
    e.preventDefault();
    if (this.state.active === false) {
      this.setState({ active: true });
    }
  }

  stopTimer(e) {
    e.preventDefault();
    if (this.state.active === true) {
      this.setState({ active: false });
    }
  }

  render() {
    const { minutes, seconds } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <p>{minutes}</p>
        <p>:</p>
        <p>{seconds}</p>

        <button
          onClick={
            this.state.active === true ? this.stopTimer : this.startTimer
          }
        >
          {this.state.active === true ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}

export default StartStopTimer;
