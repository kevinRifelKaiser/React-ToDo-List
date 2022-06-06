import React, {useState} from "react";
import ToDoItems from "./ToDoItems";

function App() {

  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  function handleInputText(event) {
    const newValue = event.target.value;
    setInputText(newValue);    
  }

  function handleItems() {
    setItems(prevValue=> {
      return[
        ...prevValue,
        inputText
      ]
  });
    setInputText('');
  } 

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        onChange={handleInputText} 
        type="text"
        name="newEntry"
        value={inputText}
        />
        <button onClick={handleItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((todoItem) => (
            <ToDoItems text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
