import React from "react";
import "./style.css";

function Content(props) {
  return (
    <div className="container">
      <div className="card special" onClick={props.handleClick}>
        <img className="card-img-top" src={props.image} alt={props.name} />
        <div className="card-body">
          <p className="card-text">{props.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
