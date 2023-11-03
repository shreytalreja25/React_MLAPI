import React, { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const limiter = () => setLimit(limit);
  const increase = () => {
    if (count < limit) {
      setCount(count + 1);
    } else {
      alert("Cannot exceed the limit!");
      setCount(0);
    }
  };

  const reset = () => setCount(0);
  return (
    <div>
      <label>Enter Limit Here :</label>
      <input
        value={limit}
        onChange={(event) => setLimit(event.target.value)}
      ></input>
      <button onClick={limiter}>Set Limit</button>
      <p>{count}</p>
      <button onClick={increase}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Counter2;
