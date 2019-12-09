import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Views/Home/Home";
import SavedBooks from "./component/Saved/SavedBooks";
import SBooksState from "./component/Context/SavedBooks/SBooksState";
import GBooksState from "./component/Context/GoogleBooks/GBooksState";

export class App extends Component {
  render() {
    return (
      <Router>
        <SBooksState>
          <GBooksState>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved-books" component={SavedBooks} />
              <Route component={Home} />
            </Switch>
          </GBooksState>
        </SBooksState>
      </Router>
    );
  }
}

export default App;
