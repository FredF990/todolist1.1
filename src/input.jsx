import React from "react";
import { useState } from "react";


function Input({addTask}) {
    const [inputV, setInputV] = useState("");

    const handleChange = (e) => {
        setInputV(e.target.value);
    };

    const handleClick = () => {
        addTask(inputV);
        setInputV("");
    };

    return (
        <div>
            <input type="text" placeholder="Enter a task" value={inputV} onChange={handleChange} />
            <button onClick={handleClick}>Add a task</button>
        </div>
    );
};

export default Input;