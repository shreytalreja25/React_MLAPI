import React, { useState } from "react";

function CounterWithHistory() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  function increase() {
    setCount(count + 1);
    setHistory([...history, count]); // Create a new array with the updated history
  }

  function reset() {
    setCount(0);
  }

  function showhistory() {
    // Map the history array to display previous counts
    const historyItems = history.map((item, index) => (
      <p key={index}>Count {index + 1}: {item}</p>
    ));

    alert("Count History:\n\n" + historyItems.join("\n"));
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={showhistory}>Show History</button>
    </div>
  );
}

export default CounterWithHistory;


// import React, { useState } from "react";

// function CounterWithHistory() {
//   const [count, setCount] = useState(0);
//   const [history, setHistory] = useState([]);

//   function increase() {
//     setHistory(history.push(count));
//     setCount(count + 1);
//   }

//   function reset() {
//     setCount(0);
//   }

//   function showhistory(){
//     return;
//   }

//   return (
//     <div>
//       <p>Count : {count} </p>
//       <button onClick={increase}>Increment</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={showhistory}>Show History</button>
//     </div>
//   );
// }

// export default CounterWithHistory;
