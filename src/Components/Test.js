import React,{ Component } from 'react';

class Test extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0,
            color: ''
            
        }
    }
    
    changeColor = () => this.setState({color: "blue"});

    plus(inValue){
        this.setState({
            counter: this.state.counter + inValue,
            color: ''
        })
    }
    
    render(){
        return(
            <>
            <h1>Test Count - {this.state.counter}</h1>
            <button onClick={()=> this.plus(1)}>+1</button>
            <button onClick={()=> this.plus(2)}>+2</button>
            <button onClick={()=> this.plus(5)}>+5</button>
            <button onClick={()=> this.plus(10)}>+10</button>
            </>
        )
    }
}

export default Test