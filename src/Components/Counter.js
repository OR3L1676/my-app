import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
       counter: 0
    }
  }
  
  incrementFive(){
    // this.setState({
    //   counter: this.state.counter + 5
    // })
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  increment(){
    // this.setState({
    //   counter: this.state.counter + 1
    // }, () => {console.log(this.state.counter)})

    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
  }))
  }

  render() {
    return (
      <>
        <h1>Count - {this.state.counter}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>IncrementFive</button>
      </>
    )
  }
}

export default Counter
