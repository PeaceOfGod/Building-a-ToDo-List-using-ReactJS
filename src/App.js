import React, { Component } from 'react';
import { Home } from './component/Home';
import { NewRecord } from './component/NewRecord';
import { ToDoList } from './component/ToDoList'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/add-record" component={NewRecord}> NewRecord </Route>
            <Route path="/to-do-list" component={ToDoList}> ToDoList </Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;