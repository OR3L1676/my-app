import React,{ Componenet } from 'react'

function FunctionClick() {
 
    function clickHandler(){
        alert("clicked!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    }

    return (
    <div>
      <button type='button' onClick={clickHandler}>click</button>
    </div>
  )
}

export default FunctionClick
