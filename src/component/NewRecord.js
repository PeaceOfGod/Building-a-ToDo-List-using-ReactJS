import React, { Component } from 'react';
import background from './background.png';

export class NewRecord extends Component {

    constructor (props) {
        super(props);

        this.state = {
            activity: []
        }
    }

    handleSubmit (e){
        this.setState({
            activity: e.target.value
        })
    }
    render () {        
        return (
            <div style={{ width: "30%", margin: "18rem auto", border: "3px solid brown", padding: "5rem", borderRadius: "2rem", 
            backgroundImage: "url(" + background + ")", backgroundSize: "contain"}}>
                <form >
                    <div class="form-group">
                        <label for="activity">Activity</label>
                        <input type="email" className="form-control" value={this.state.activity} onChange={this.handleSubmit.bind(this)}
                        id="activity" placeholder="What is the activity you wanna log?"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1" >Select Category</label>
                        <select className="form-control" id="option-select" value={this.state.activity} onChange={this.handleSubmit.bind(this)}>
                            <option>Select Category</option>
                            <option>To Do</option>
                            <option>In Progress</option>
                            <option>Done</option>
                        </select>
                    </div>
                    <button onClick="handleSubmit()" type="submit" className="btn btn-primary mb-2" style={{ marginLeft: "9rem" }}>Submit Activity</button>
                    <p className="copyright" style={{ textAlign: "center" }}>&copy; Work by <a href="https://peacelive.com">PEACE</a>.</p>
                </form>
            </div>
            
        )
    }
}