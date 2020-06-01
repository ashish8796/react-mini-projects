import React, { Component } from 'react';
import './App.css';
import FrontPage from "./Front-page";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: FrontPage,
      level: ""
    };
    this.handelCurrentPage = this.handelCurrentPage.bind(this);
  }

  handelCurrentPage(nextPage, level) {

    this.setState(state => ({
      currentPage: nextPage,
      level: level
    }));
  }

  render() {
    return (
      <this.state.currentPage onClick={this.handelCurrentPage} level={this.state.level} />
    );
  }
}

export default App;
