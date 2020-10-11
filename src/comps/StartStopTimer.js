import React, { Component } from "react";

class StartStopTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      updated: false,
      timeLeft: 0,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentWillUnmount() {
    this.setState({
      updated: false,
    });
  }

  startTimer(e, timeRemaining) {
    e.preventDefault();
    if (this.state.active === false) {
      this.setState({ active: true });
      this.timer = setInterval(() => {
        this.setState({ timeLeft: timeRemaining - 1 });
        console.log(this.state.timeLeft);
      }, 1000);
    }
  }

  stopTimer(e, timeRemaining) {
    e.preventDefault();
    if (this.state.active === true) {
      this.setState({ active: false });
      clearInterval(this.timer);
    }
  }

  render() {
    const timeRemaining = this.props.minutes * 60 + this.props.seconds; //When state works i will need to change it to the state
    return (
      <div style={{ display: "flex" }}>
        <p>{this.props.minutes}</p>
        {/* change to state */}
        <p className="timerColon">:</p>
        <p>{this.props.seconds}</p>
        {/* change to state */}
        <button
          onClick={
            this.state.active === true
              ? (e) => {
                  this.stopTimer(e, timeRemaining);
                }
              : (e) => {
                  this.startTimer(e, timeRemaining);
                }
          }
        >
          {this.state.active === true ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}

export default StartStopTimer;
