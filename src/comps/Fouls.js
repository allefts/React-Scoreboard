import React, { Component } from "react";

class Fouls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fouls: 0,
    };
  }
  render() {
    return (
      <div>
        <button value="+" onClick={this.clickHandler}>
          +
        </button>
        <h1>{this.state.fouls}</h1>
        <button value="-" onClick={this.clickHandler}>
          -
        </button>
      </div>
    );
  }

  clickHandler = (e) => {
    if (e.target.value === "+") {
      this.setState({
        fouls: this.state.fouls + 1,
      });
    } else if (e.target.value === "-") {
      this.setState({
        fouls: this.state.fouls - 1,
      });
    }
  };
}

export default Fouls;
