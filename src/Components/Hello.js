import React from 'react'

const Hello = () => {
    // return (                     // without jsx
    //     <h1>JSX is the shit!</h1>
    // )

    //React.createElement('div',null,<h1>Hello JSX</h1>) // orginal 
    //way to write it
    return React.createElement('div', {id: 'hello', className: 'chimpanzee'}
, React.createElement('h1', null, 'JSX shiton'))  
}
export default Hello