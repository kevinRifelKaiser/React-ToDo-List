import React from "react";

function ToDoItems(props) {

  return (
    //3.2. Acá con la propiedad onClick, podemos acceder a las propiedades del list item para que haga algo cuando le hacemos click. En este caso accederá a la propiedad onChecked que creamos en "App.jsx" (la cual llama a la función deleteItem) y le pasamos como parámetro el id del item al que le hacemos click, para que a su vez se lo pase a la función y esta filtre el array y devbuelva todos los items menos el que le hicimos click.
    //Notese que a la propiedad onClick no le pasamos directamente props.onChecked(props.id), si no que se lo pasamos dentro de una función, esto es porque, dado como tenemos construida nuestra aplicación, si no lo pasamos con una función, cuando agreguemos un items con el boton add, este renderizará el list item llamando a la propieda onChecked haciendo que crashee, metiendolo en una función hacemos que se active únicamente cuando le hacemos click al list item que queremos eliminar.
    <div onClick={()=>{
      props.onChecked(props.id)
      }}>
      <li>{props.text}</li>
    </div>
  );
  
}

export default ToDoItems;