import React, { Component } from "react";

class StartStopTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 0,
      seconds: 0,
      active: false,
    };

    this.StartorStop = this.StartorStop.bind(this);
    this.tick = this.tick.bind(this);
  }

  StartorStop(e, minutes, seconds) {
    e.preventDefault();
    if (e.target.name === "Start" || this.state.active === false) {
      this.setState({ active: true });
      this.timer = setInterval(
        () => this.setState({ seconds: this.state.seconds - 1 }),
        1000
      );
    } else if (e.target.name === "Stop" || this.state.active === true) {
      this.setState({ active: false });
      clearInterval(this.timer);
    }
  }

  tick(e) {}

  render() {
    return (
      <div style={{ display: "flex" }}>
        <p>{this.state.minutes}</p>
        <p>:</p>
        <p>{this.state.seconds}</p>

        <button
          name="Start"
          onClick={(e) => {
            this.StartorStop(e, this.props.minutes, this.props.seconds);
          }}
        >
          Start
        </button>
        <button
          name="Stop"
          onClick={(e) => {
            this.StartorStop(e, this.props.minutes, this.props.seconds);
          }}
        >
          Stop
        </button>
      </div>
    );
  }
}

export default StartStopTimer;
