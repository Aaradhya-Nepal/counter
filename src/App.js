import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function counter() {
    setCount(count + 1);
  }
  function reverseCounter() {
    setCount(count - 1);
  }
  return (
    <>
      <button onClick={reverseCounter}>-1</button>
      <h1>{count}</h1>
      <button onClick={counter}>+1</button>
    </>
  );
}

export default App;
