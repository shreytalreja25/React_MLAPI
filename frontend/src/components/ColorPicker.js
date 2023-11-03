// Question 5: Create a new functional component called ColorPicker. This component should allow the user to pick a color from a predefined list of colors. The selected color should be displayed in a <div> with its background color set to the chosen color. You can use a dropdown or any other UI element to select a color from the list.

import React, { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("");

  function StateSetter(event) {
    setSelectedColor(event.target.value);
    return;
  }

  function ColorArea(props) {
    return (<div style={{background:props.color,width:"100px",height:"100px"}}>
        {/* Display the color */}
    </div>);
  }

  return (
    <div>
      <p>Select a color : </p>
      <select onChange={StateSetter} id="color-picker">
        <option value={" "}>--SELECT--</option>
        <option value={"Red"}>Red</option>
        <option value={"Yellow"}>Yellow</option>
        <option value={"Blue"}>Blue</option>
      </select>
      <ColorArea color={selectedColor}/>
    </div>
  );
};

export default ColorPicker;
