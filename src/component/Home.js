import React, { Component } from 'react';
import { BoxComponent } from './BoxComponent';
import { NewRecord } from './NewRecord';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/modal';

export class Home extends Component {

  constructor () {
    super()
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal = () => {
    this.setState ({
      show: true
    });
    console.log("Peace is here")
  };
  
  hideModal = () => {
    this.setState ({
      show: false
    });
  };  

  render() {
    return (      
      <div>
        <div className="card bg-light mb-3" style={{ position: "absolute", width: "90rem", height: "50rem", marginLeft: "15rem", marginTop: "5rem", borderRadius: "10px" }}>
          <h2 className="card-header" style={{ backgroundColor: "#00FA9A", height: "15rem", color: "white" }}>.</h2>
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>

          <Button className="btn btn-info" onClick={this.showModal} style={{ position: "relative", marginTop: "8rem", marginLeft: "92rem" }}>
          New Record
          </Button>
        
        <Modal show={this.state.show}  backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>New Record</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewRecord />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
        <div style={{  display: "flex", marginLeft: "15rem", marginTop: "4rem" }}>
          <BoxComponent name="To Do"/>
          <BoxComponent name="In Progress"/>
          <BoxComponent name="Done"/>
        </div>         
      </div>
      
    )
  }    
}