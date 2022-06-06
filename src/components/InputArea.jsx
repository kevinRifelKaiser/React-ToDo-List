import React from "react";

function InputArea() {
    return(
        <div className="form">
            <input
            //1.1.1 handleInputText
            onChange={handleInputText} 
            type="text"
            value={inputText}
            />
            {/* 2.1.1 handleItems */}
            <button onClick={handleItems}>
            <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;