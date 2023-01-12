import React, { Component } from 'react'

export default class Component5 extends Component {
    state = {
        message : "Hello world"
    }

 

  render() {
    const { message } = this.state;
    return (
        <div>
          <span>{message}</span><br/>
        <button onClick={() => this.setState({message : "Goodbye world"})}>click</button>
      </div>

    )
  }
}
