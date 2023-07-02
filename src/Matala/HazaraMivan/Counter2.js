import React, { Component } from 'react'

class Counter2 extends Component {
  constructor(){
    super()
    this.state ={
        counter: 0
    }
  }
    addCount(val){
        this.setState({
            counter: this.state.counter + val
        })
    }
    
    render() {
    return (
      <div>
        <button onClick={() => this.addCount(1)}>+1</button>
        <button onClick={() => this.addCount(5)}>+5</button>
        <button onClick={() => this.addCount(10)}>+10</button>
        <button onClick={() => this.addCount(100)}>+100</button>
        <h1>Count - {this.state.counter}</h1>
      </div>
    )
  }
}

export default Counter2
