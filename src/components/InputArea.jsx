import React, {useState} from "react";

function InputArea(props) {

    //1. inputText almacenara el valor de lo que se escribe en el input
    const [inputText, setInputText] = useState('');

    //1.1 esta función ira almacenando lo que se escriba en el input a medida que su valor cambie (ver 1.1.1 donde se targetea esta función)
    function handleInputText(event) {
        const newValue = event.target.value;
        setInputText(newValue);    
    }

    return(
        <div className="form">
            <input
            //1.1.1 handleInputText
            onChange={handleInputText}
            value={inputText}
            />
            {/* 2.1.1 handleItems */}
            <button onClick={()=>{
                props.onChecked(inputText);
                setInputText('');
            }}>
            <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;