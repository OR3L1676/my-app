import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
        parentName: 'parent'
    }
   this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

//   greetParent2() {  שיטה לנגרים
//     alert("hello")
//     alert(this.state.parentName)
//   }
  
    render() {
    return (
      <>
        <ChildComponent greetHandler={this.greetParent} />
      </>
    )
  }
}

export default ParentComponent
