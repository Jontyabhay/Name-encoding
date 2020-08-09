import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/double-metaphone.component";
import EditTodo from "./components/lookup-table.component";
import TodosList from "./components/soundex.component";
import NewTodo from "./components/findex-metaphone.component";

import logo from "./Soundex.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank" rel="noopener noreferrer">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/intro" className="navbar-brand">Irish Name Encoding</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Soundex</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Double Metaphone</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add" className="nav-link">Findex Metaphone</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path = "/intro" exact component={EditTodo} />
          <Route path="/" exact component={TodosList} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/add" exact component={NewTodo} />
        </div>
      </Router>
    );
  }
}

export default App;