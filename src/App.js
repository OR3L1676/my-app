import React, { Component } from 'react';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Message2 from './Components/Message2';
import Counter from './Components/Counter';
import Test from './Components/Test';
import FunctionClick from './Components/FunctionClick';
import EventBind from './Components/EventBind.js';
import ParentComponent from './Components/ParentComponent';
import NameList from './Components/NameList';
import List from './Matala/List';
import Counter2 from './Matala/HazaraMivan/Counter2';
import List2 from './Matala/HazaraMivan/List2';
import List3 from './Matala/HazaraMivan/List3';
import CounterTest from './Matala/CounterTest';

class App extends Component {
  render() {
    return (
      <>
       {/* <CounterTest /> */}
      {/* <List3 zname="hello my name is props"/> */}
      <List2 />
      {/* <Counter2 /> */}
      {/* <List /> */}
      {/* <NameList />
      <ParentComponent />
      <EventBind /> */}
      {/* <Counter />
      <Test />
      <FunctionClick /> */}
       {/* <Message />
       <Message2 /> */}
       {/* <Greet name="Rahav" heroName="Zona" />
       <Greet name="Bruch" heroName="Batman">
        <button>Click</button>
       </Greet>
       <Greet name="Clark" heroName="Superman">
        <p>Children!</p>
       </Greet>
       <Welcome name="Bruch" heroName="Batman" />
       <Welcome name="Clark" heroName="Superman" />
       <Hello /> */}
      </>
    );
  }
}

export default App;
