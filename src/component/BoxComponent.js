import React from 'react';

export function BoxComponent (props) {
    // const name = [{
    //     first: "To Do",
    //     second: "In Progress",
    //     Third: "Done"
    // }];
    
    return (
        <div class="card bg-light mb-3" style={{ width: "18rem", height: "18rem", marginLeft: "10rem", borderRadius: "1rem"}}>
            <h2 class="card-header" style={{ textAlign: "center", color: "#32CD32" }}>{props.name}</h2>
            <div class="card-body">
            <p class="card-text"></p>
            </div>
        </div>
    )
}