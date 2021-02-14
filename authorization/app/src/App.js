import React from 'react';
import LoginPage from './Components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SignUpPage from './Components/SignUpPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
