import React, { useState } from "react";

const GreetUser = () => {
  const [username, setUsername] = useState("");
  const [greeting, setGreeting] = useState("");

  function userInput(event){
    const name = event.target.value;
    setUsername(name)
  }
  function handleGreet() {
    setGreeting(`Hello , ${username}`);
  }

  return (
    <div>
      <label>Enter your name : </label>
      <input
       type="text"
        value={username}
        onChange={userInput} 
      />
      <button onClick={handleGreet}>
        Set username
      </button>
      <p>{greeting}</p>
    </div>
  );
};

export default GreetUser;
