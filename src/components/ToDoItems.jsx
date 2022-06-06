import React, { useState } from "react";

function ToDoItems(props) {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: click ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItems;