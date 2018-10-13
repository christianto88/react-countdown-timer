import React, { Component } from "react";
import "./App.css";
import InputForm from "../containers/InputForm";
import Display from "../containers/Display";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Mid">
          <h1>Simple Countdown Timer</h1>
          <InputForm />
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
