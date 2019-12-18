import React from "react";
import "./style.css";

function Counter(props) {
    return (
        <div className="container">
            <p>Count = {props.counter}</p>
        </div>
    );
}

export default Counter;
