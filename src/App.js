import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  function decrement() {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <h1>Tally count app</h1>
      <h1>{number}</h1>
      <button className="myButton" onClick={increment}>
        +
      </button>
      <button className="myButton" onClick={decrement}>
        -
      </button>
    </div>
  );
}
