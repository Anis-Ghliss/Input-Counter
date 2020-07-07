import React from "react";
import "../styles.css";
import Counter from "./counter";
import CounterInput from "./CounterInput";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <CounterInput />
    </div>
  );
}
