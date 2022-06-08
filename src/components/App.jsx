import React, {useState} from "react";
import ToDoItems from "./ToDoItems";
import InputArea from "./InputArea";

function App() {
  
  //2. items almacenara el valor final del inputText
  const [items, setItems] = useState([]);
  
  //2.1 esta función alamacena en el array los valores a medida que se aprite "add" y vaciamos lo que este escrito en el input luego de almacenarlo (la usamos en 2.1.1).
  function handleItems(a) {
    const newInputItem = a;
    setItems(prevValue=> {
      return[
        ...prevValue,
        newInputItem
      ]
  });
  }

  //3. esta función la usamos para eliminar el item al que le hagamos click. Para esto en 3.1 añadimos al método map un index ya que nos da la posibilidad, y le damos al list item un id igual al index para targetearlo.
  function deleteItem(id) {
    setItems((prevItems)=> {
      return prevItems.filter((item, index)=>{
        return index !== id;
      })
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        type="text"
        onChecked={handleItems}
      />
      <div>
        <ul>
        {/*3.1. además usamos el index para darle la key al list item, ya que todos los itmes tienen que tener una key, en este caso lo hacemos igual al index aunque no es conveniente, deberíamos crear un campo especial para esto, podemos usar el paquete uuid por ejemplo. Luego en el componente "ToDoItems,jsx", en el punto 3.1, accedemos a este componente que lo contiene, a travez de la propiedad id para desde una jerarquía mas abajo, activar la función de delete.*/}
        {items.map((todoItem, index) => (
            <ToDoItems key={index} id={index} text={todoItem} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
