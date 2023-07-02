import React, { Component } from 'react'

class Message2 extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Nothing'
        }
    }

    changeMessage(){
       this.setState({
        message: 'Everything'
       })
    }
    
    render () {
        return (
            <>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>changeM</button>
            </>
        ) 
        
    }
}

export default Message2
