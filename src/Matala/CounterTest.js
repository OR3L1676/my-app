import React, {Component} from 'react'

class CounterTest extends Component {
   constructor() {
    super()
    this.state = {
        Counter: 0
    }
   }

   addCount(val) {
    this.setState({
        Counter: this.state.Counter += val
    })
   }

   render() {
    return(
        <div>
            <button onClick={() => this.addCount(1)}>+1</button>
            <button onClick={() => this.addCount(5)}>+5</button>
            <button onClick={() => this.addCount(10)}>+10</button>
            <button onClick={() => this.addCount(100)}>+100</button>
            <button onClick={() => this.addCount(1676)}>+1676</button>
            <h1>Count - {this.state.Counter}</h1>
        </div>
    )
   }
}

export default CounterTest

