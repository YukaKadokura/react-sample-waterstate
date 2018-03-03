import React from "react";
import { render } from "react-dom";

import "./App.css";

class Water extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  getWaterState(temp) {
    if (temp <= 0) {
      return "Ice";
    }

    if (100 <= temp) {
      return "Steam";
    }

    return "Water";
  }

  getWaterClass(temp) {
    if (temp <= 0) {
      return "ice";
    }

    if (100 <= temp) {
      return "steam";
    }

    return "water";
  }

  render() {
    const { temp } = this.state;

    return (
      <div>
        <button onClick={this.onButtonPlus}>+1</button>
        <button onClick={this.onButtonPlus10}>+10</button>
        <button onClick={this.onButtonMinus}>-1</button>
        <button onClick={this.onButtonMinus10}>-10</button>
        <h2 className={this.getWaterClass(this.state.temp)}>
          phase: {this.getWaterState(temp)}, {temp} ℃
        </h2>
      </div>
    );
  }

  onButtonPlus = () => {
    this.setState({ temp: this.state.temp + 1 });
  };

  onButtonPlus10 = () => {
    this.setState({ temp: this.state.temp + 10 });
  };

  onButtonMinus = () => {
    this.setState({ temp: this.state.temp - 1 });
  };

  onButtonMinus10 = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
}

render(<Water />, document.getElementById("root"));
