import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  // const state = useState(1213);
  const [count, setcount] = useState(0);

  function increase() {
    // count++;
    setcount(count + 1);
  }

  function decrease() {
    // count++;
    setcount(count - 1);
  }
  function mutliply() {
    // count++;
    setcount(count * 2);
  }
  function divide() {
    // count++;
    setcount(count / 10);
  }

  return (
    <div className="container">
      <h1>{count}</h1>

      <button onClick={increase}>+1</button>

      <button onClick={decrease}>-1</button>
      <button onClick={mutliply}>*10</button>
      <button onClick={divide}>/2</button>
    </div>
  );
}

export default App;
