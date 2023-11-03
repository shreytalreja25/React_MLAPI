import React, { useState } from "react";

const CounterWithLimit = () => {
  const [count, setCount] = useState(0);

  function increase() {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Cannot exceed 10");
      setCount(0);
    }
  }

  function reset() {
    setCount(0);
  }
  return (
    <div>
      <button onClick={increase}>INCREMENT</button>
      <button onClick={reset}>RESET</button>
      <p>COUNT : {count} </p>
    </div>
  );
};

export default CounterWithLimit;
