import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function Increase(){
    setCount(count + 1)
    return;
  }

  function Decrease(){
    setCount(count - 1)
    return;
  }

  function Reset(){
    setCount(0)
    return;
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={Increase}>Increment</button>
      <button onClick={Decrease}>Decrement</button>
      <button onClick={Reset}>Reset</button>

    </div>
  );
};

export default Counter;
