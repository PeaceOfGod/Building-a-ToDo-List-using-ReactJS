import React from 'react';

export function BoxComponent (props) {
        
    return (
        <div className="card bg-light mb-3" style={{ width: "18rem", height: "18rem", marginLeft: "10rem", borderRadius: "1rem"}}>
            <h2 className="card-header" style={{ textAlign: "center", color: "#32CD32" }}>{props.name}</h2>
            <div className="card-body">
            <p className="card-text"></p>
            </div>
        </div>
    )
}