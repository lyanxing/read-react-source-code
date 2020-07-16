import React, { Component } from 'react';

export default class StateTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  increaseNum = () => {
    this.setState({ num: this.state.num + 1 });
  }

  render() {
    return <div onClick={this.increaseNum}>{ this.state.num } </div>
  }
}