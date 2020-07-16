import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  handleClick = () => {
    this.setState({ num: this.state.num + 1 });
  };

  render() {
    const { num } = this.state;
    return (
      <div className="App" onClick={this.handleClick}>
        {num}
      </div>
    );
  }
}

export default App;
