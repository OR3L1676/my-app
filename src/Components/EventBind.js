import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'hello'
        }
        this.clickHandler = this.clickHandler.bind(this) // החרא
    }
  
    clickHandler(){
        this.setState({
            message: 'goodbye!'
        })
        console.log(this)
    }
    
  
    // clickHandler = () => { זה עדיף על החרא למעלה 
    //     this.setState({
    //         message: 'goodbye!'
    //     })
    //     console.log(this)
    // }
    

    render() {
    return (
      <>
       <div>{this.state.message}</div>
       <button onClick={this.clickHandler.bind(this)}>Click</button>
       <button onClick={() => this.clickHandler()}>Click</button>
       <button onClick={this.clickHandler}>Click</button>
      </>
    )
  }
}

export default EventBind
