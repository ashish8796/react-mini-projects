import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { Component } from 'react';
import Home from "./screens/Home";
import User from "./screens/User";
import ErrorBoundary from "./components/ErrorBoundary";
import { Mytheme, MyThemeProvider } from "./components/Context";


// themes 1- dark, 2- light

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      lightMode: false
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange = (state = {}, cb = () => { }) => {
    this.setState({
      ...state
    }, cb)
  }

  render() {
    return (
      <MyThemeProvider>
        <Router>
          <>
            <Switch>
              <Route path="/user" >
                <User />
              </Route>
              <Route exact path="/" >
                <Home />
              </Route>
            </Switch>
          </>
        </Router >
      </MyThemeProvider>
    )
  }

}

export default App;
