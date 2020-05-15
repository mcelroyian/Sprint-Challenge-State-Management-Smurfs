import React, { Component } from "react";
import Recruiter from './Recruiter'
import Village from './Village'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Recruiter />
        <Village />
      </div>
    );
  }
}

export default App;
