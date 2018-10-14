import React, { Component } from "react";
import "./Forms.css";
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "",
      end: ""
    };
  }
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  validateInput = input => {
    const regex = new RegExp(
      "^([0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])$"
    );
    return regex.test(input);
  };
  startCountdown = () => {
    let { setTime, setMsg, timer, setTimer } = this.props;
    clearInterval(timer);
    if (
      this.validateInput(this.state.start) &&
      this.validateInput(this.state.end)
    ) {
      let startArr = this.state.start.split(":");
      let endArr = this.state.end.split(":");
      let startSec =
        parseInt(startArr[0]) * 3600 +
        parseInt(startArr[1]) * 60 +
        parseInt(startArr[2]);
      let endSec =
        parseInt(endArr[0]) * 3600 +
        parseInt(endArr[1]) * 60 +
        parseInt(endArr[2]);
      if (endSec <= startSec) {
        setMsg("end time must be greater than start time");
      } else {
        let time = endSec - startSec;
        setMsg("");
        setTime(time);
        let newTimer = setInterval(
          () => {
            setTime(--time);
          },
          1000,
          time
        );
        setTimer(newTimer);
      }
    } else {
      setMsg("Please check your time format");
    }
  };
  render() {
    return (
      <div className="Form">
        <div style={{ margin: "10px" }}>
          <label className="Label">Start time (hh:mm:ss)</label>
          <input type="text" onChange={this.handleInputChange} name="start" />
        </div>
        <div style={{ margin: "10px" }}>
          <label className="Label">End time (hh:mm:ss)</label>
          <input type="text" onChange={this.handleInputChange} name="end" />
        </div>
        <button onClick={this.startCountdown}>Start Countdown</button>
      </div>
    );
  }
}

export default Forms;
