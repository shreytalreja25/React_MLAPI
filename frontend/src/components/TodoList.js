// Question 4: Create a new component called TodoList. This component should display a list of to-do items. You can start with an array of to-do items and render them as an unordered list (<ul>) with list items (<li>). Make sure to map over the array and render each to-do item dynamically.

import React from "react";

const TodoList = () => {
    debugger;
  const ToDos = ["Wake Up", "Brush Up", "Work Out", "Eat", "Head out"];

    function ToDoMapper(item){
        return(
            <ul>
                <li>{item}</li>
            </ul>
        )
    }

  return <div>{ToDos.map(ToDoMapper)}</div>;
};

export default TodoList;