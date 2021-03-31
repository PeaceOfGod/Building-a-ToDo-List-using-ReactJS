import React from 'react';
import { BoxComponent } from './BoxComponent';
import { Link } from 'react-router-dom';

export function Home (props) {
    return (      
      <div>
        <div class="card bg-light mb-3" style={{ position: "absolute", width: "90rem", height: "50rem", marginLeft: "15rem", marginTop: "5rem", borderRadius: "10px" }}>
          <h2 class="card-header" style={{ backgroundColor: "#00FA9A", height: "15rem", color: "white" }}>.</h2>
          <div class="card-body">
            <p class="card-text"></p>
          </div>
        </div>
          <Link className="btn btn-info" to="/add-record" id="new-record" style={{ position: "relative", marginTop: "8rem", marginLeft: "92rem" }}>
          New Record
          </Link>

          <div style={{  display: "flex", marginLeft: "15rem", marginTop: "4rem" }}>
            <BoxComponent name="To Do"/>
            <BoxComponent name="In Progress"/>
            <BoxComponent name="Done"/>
          </div>
                
      </div>
    )
}

// const element = <Home name="Peace"/>;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

// <div class="card bg-light mb-3" style={{ width: "18rem", height: "18rem", marginLeft: "10rem", borderRadius: "1rem"}}>
// <h2 class="card-header" style={{ textAlign: "center", color: "#32CD32" }}>To do</h2>
// <div class="card-body">
//   <p class="card-text"></p>
// </div>
// </div>

// <div class="card bg-light mb-3" style={{ width: "18rem", height: "18rem", marginLeft: "10rem", borderRadius: "1rem"}}>
// <h2 class="card-header" style={{ textAlign: "center", color: "#32CD32" }}>To do</h2>
// <div class="card-body">
//   <p class="card-text"></p>
// </div>
// </div>

// <div class="card bg-light mb-3" style={{ width: "18rem", height: "18rem", marginLeft: "10rem", borderRadius: "1rem"}}>
// <h2 class="card-header" style={{ textAlign: "center", color: "#32CD32" }}>To do</h2>
// <div class="card-body">
//   <p class="card-text"></p>
// </div>
// </div>