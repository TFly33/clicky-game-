import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <h1 className="title">{props.children}</h1>
                        (and two games that I played recently)
                        <br></br>
                        ....In clickable form.
                    </blockquote>
                </div>
                <div className="card-header">

                </div>
            </div>
        </div>
    );
}

export default Title;
