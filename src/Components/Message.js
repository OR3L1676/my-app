import React, { Component } from 'react'

class Message extends Component {
   constructor() {
        super()
        this.state = {
            message: 'Welcome props',
            buttonText1: 'Click State',
            buttonText2: 'Click Ultimate State',
            counter: 0
        }
   }
   
   changeMessage() {
    if(this.state.buttonText1 === 'changed button state'){ 
      this.setState({
            message: 'Welcome state',
            buttonText1: 'Click State',
            counter: this.state.counter+1
           })
      } else {
        this.setState({
            message: 'Welcome state',
            buttonText1: 'changed button state',
            counter: this.state.counter + 1  
        })
        }       
    
   }

   changeMessage2() {
    if (this.state.buttonText2 === 'changed button ultimate state') {
        this.setState({
          message: 'Welcome State the leader!!!',
          buttonText2: 'Click Ultimate State',
          counter: this.state.counter + 1
        });
      } else {
        this.setState({
          message: 'Welcome State the leader!!!',
          buttonText2: 'changed button ultimate state',
          counter: this.state.counter + 1
        });
      }
    }



    render() {
        return(
            <>
            <h1>{this.state.message}</h1>
            <h1>{this.state.counter}</h1>
            <button onClick={() => this.changeMessage()}>{this.state.buttonText1}</button>
            <button onClick={() => this.changeMessage2()}>{this.state.buttonText2}</button>
            </>
        )
    }
}

export default Message