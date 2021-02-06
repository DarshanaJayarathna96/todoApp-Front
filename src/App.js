import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import CreateTodo from "./components/create-todo.component";
import TodosList from "./components/todos-list.component.js";
import Front from "./Front.js"


class App extends Component {
  render() {
    return (
      <Router>
       <div >
          <Front />
          <Route path="/" component={CreateTodo} />
          <Route path="/" exact component={TodosList} />
        </div>
      </Router>
    );
  }
}

export default App;