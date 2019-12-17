import React from "react";
import "./style.css";

function Content(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.removeContent(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default Content;
