import React, { Component } from 'react'

export default class Component3 extends Component {
    state = {
        number: 1
    };

    render() {
        const {number} = this.state;

    return (
      <div>
        <span>{number}</span>
        <br/>
        <button onClick={() => this.setState({ number: number+2 })}>
          +2
        </button>
        <button onClick={() => this.setState({ number: number-1 })}>
          -1
        </button>
      </div>
    );
  }
}
