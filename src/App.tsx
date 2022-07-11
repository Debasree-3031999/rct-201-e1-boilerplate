import React, { useState } from "react";
import "./App.css";
import Clock from "./components/Clock";
import useClock from "./hooks/useClock";
import List1 from "./components/List1";
import List2 from './components/List2';

function App() {
  const props=useClock();

  return (
    <div className="App">
      <Clock hour={props.hour} minute={props.minute} second={props.second}/>
      <List1  label={"List 1"} initialValues={[1, 2, 3]} /> 
      <List2  label={"List 2"} initialValues={[4,5]} /> 
      {/* Clock */}
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
    </div>
  );
}

export default App;
