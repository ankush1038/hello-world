import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">

        <NameList />



       {/*<UserGreetings />
       <ParentComponent /> 


      <EventBind />
        <FunctionClick />

      <Counter />
      
      <Message />

       <Greet name = 'Bruce' hero = 'Batman'>
        <p>This is a children a props.</p>
        </Greet>
      <Greet name = 'Clark' hero = 'Superman'><button>Action</button></Greet>
      <Greet name = 'Diana' hero = 'Wonder Woman'></Greet>
      <Welcome name = 'Bruce' hero = 'Batman'></Welcome>
      
      <Welcome name = 'Clark' hero = 'Superman'></Welcome>
      
      <Welcome name = 'Diana' hero = 'Wonder Woman'></Welcome>

      
      {/* <Hello /> */}
    </div>
  );
}

export default App;
