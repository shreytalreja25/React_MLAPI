import React, { useState } from "react";

function ColorToggler() {
  const [color, setColor] = useState("Red");

  function handleClick() {
    if (color === "Red") {
      setColor("Blue");
    } else if (color === "Blue") {
      setColor("Red");
    }
  }

  return <div onClick={handleClick} style={{ background: color, height:"100px" }}></div>;
}

export default ColorToggler;
