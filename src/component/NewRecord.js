import React, { Component } from "react";
import { Button } from 'react-bootstrap';

export class NewRecord extends Component {
  constructor(props) {
    super(props);

    this.state = {
        activityName: "",
        selectValue: "",
        activity: {},
    };    
  }

  handleInputEntry = (e) => {
    this.setState({
      activityName: e.target.value,   
    });
  }

  handleSelectEntry = (e) => {
    this.setState({
      selectValue: e.target.value,
    });
  }

 getActivity(e) {
    switch(e) {
        case (this.state.selectValue === "To Do"):
            localStorage.getItem("To Do")
            return localStorage.setItem("To Do", this.state.activityName);
        case (this.state.selectValue === "In Progress"):
            localStorage.getItem("In Progress")
            return localStorage.setItem("To Do", this.state.activityName);
        case (this.state.selectValue === "Done"):
            localStorage.getItem("Done", this.state.activityName)
            return localStorage.setItem("To Do", this.state.activityName);
        default:
            return "true";
       }
 }

  handleSubmit(e) {
      alert(`${this.state.activityName} ${this.state.selectValue}`)
    e.preventDefault();
    this.setState({
      activity: {
        ...this.state.activity,
        [this.state.activityName]: this.state.selectValue,
      },
    });
    
    console.log(this.state.activity);
  };

  render() {
    return (
      <div
      >      
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="activity">Activity</label>
            <input
              type="text"
              className="form-control"
              value={this.state.activityName}
              onChange={this.handleInputEntry}
              id="activity"
              placeholder="What is the activity you wanna log?"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Select Category</label>
            <select
              className="form-control"
              id="option-select"
              value={this.state.selectValue}
              onChange={this.handleSelectEntry}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option> 
            </select>
          </div>
          <Button type="submit" variant="primary">Add Activity</Button>
        </form>
      </div>
    );
  }
}
