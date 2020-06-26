import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { Component } from 'react';
import Home from "./screens/Home";
import User from "./screens/User";
import { MyThemeProvider } from "./components/ThemeContext";


// themes 1- dark, 2- light
class App extends Component {
  render() {
    return (
      <MyThemeProvider>
        <Router>
          <Switch>
            <Route path="/user" >
              <User />
            </Route>
            <Route exact path="/" >
              <Home />
            </Route>
          </Switch>
        </Router>
      </MyThemeProvider>
    )
  }
}

export default App;
