import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      nums: [0, 1],
    };
  }

  handleAddTail = () => {
    const { nums } = this.state;
    let max = Math.max(...nums);
    if (nums.length === 0) {
      max = -1;
    }
    this.setState({ nums: [...nums, max + 1] });
  };

  handleAddHead = () => {
    const { nums } = this.state;
    let min = Math.min(...nums);
    if (nums.length === 0) {
      min = 0;
    }
    this.setState({ nums: [min - 1, ...nums] });
  };

  handleDeleteHead = () => {
    const { nums } = this.state;
    const [a, ...newNums] = nums;
    this.setState({ nums: newNums });
  };

  handleDeleteTail = () => {
    const { nums } = this.state;
    nums.pop();
    this.setState({ nums: [...nums] });
  };

  hanldeShuffle = () => {
    const { nums } = this.state;
    nums.sort((a, b) => (Math.random() > 0.5 ? -1 : 1));
    this.setState({ nums: [...nums] });
  };

  render() {
    const { num, nums } = this.state;
    return (
      <div className="App">
        <div className="nums-container">
          {nums.map((num) => (
            <div key={num}>{num}</div>
          ))}
        </div>
        <div>
          <button className="" onClick={this.handleAddHead}>
            添加头部
          </button>
          <button className="" onClick={this.handleAddTail}>
            添加尾部
          </button>
          <button className="" onClick={this.handleDeleteHead}>
            删除头部
          </button>
          <button className="" onClick={this.handleDeleteTail}>
            删除尾部
          </button>
          <button className="" onClick={this.hanldeShuffle}>
            shuffle
          </button>
        </div>
      </div>
    );
  }
}

export default App;