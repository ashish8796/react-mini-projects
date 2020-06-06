import React, { Component } from 'react';
import './App.css';
import FrontPage from "./Front-page";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: FrontPage,
      level: "",
      playerName: "",
      moves: 0,
      seconds: 0,
      gamePlayed: false
    };
    this.handelCurrentPage = this.handelCurrentPage.bind(this);
  }

  handelCurrentPage(nextPage, level, playerName, moves, seconds) {

    this.setState(state => ({
      currentPage: nextPage,
      level: level,
      playerName: playerName,
      moves: moves,
      seconds: seconds,
      gamePlayed: this.state.currentPage === FrontPage ? false : true
    }));

  }


  render() {
    // console.log(this.state)
    return (
      <this.state.currentPage onClick={this.handelCurrentPage} level={this.state.level} khiladi={this.state.playerName} moves={this.state.moves} seconds={this.state.seconds} gamePlayed={this.state.gamePlayed} />
    );
  }
}

export default App;
