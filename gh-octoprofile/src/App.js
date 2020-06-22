import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { Component } from 'react';
import Home from "./screens/Home";
import User from "./screens/User";
import ErrorBoundary from "./components/ErrorBoundary";

// themes 1- dark, 2- light

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark"
    };
  }

  handleStateChange = (state = {}, cb = () => { }) => {
    this.setState({
      ...state
    }, cb)
  }

  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route path="/user" >
              <ErrorBoundary>
                <User />
              </ErrorBoundary>
            </Route>
            <Route exact path="/" >
              <Home theme={this.state.theme} handleStateChange={this.handleStateChange} />
            </Route>
          </Switch>
        </>
      </Router>
    )
  }

}

export default App;
