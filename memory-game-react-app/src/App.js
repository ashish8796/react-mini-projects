import React, { Component } from 'react';
import './App.css';
import FrontPage from "./components/FrontPage";
import LearderBoardPage from './components/LearderBoard';
import GameLevels from './components/Game';
import emitter from './utils/events';

// levels
// 1 - easy 
// 2- medium
// 3 - hard

// Screens
// 1 - FrontPage
// 2 - LeaderBoard
// 3 - Game


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'FrontPage',
      level: "",
      playerName: "",
      moves: 0,
      seconds: 0,
      gamePlayed: false
    };
  }

  componentDidMount() {
    emitter.on('player-added', (data) => {
      console.log(data)
    });
  }

  handleStateChange = (state = {}, cb = () => { }) => {
    console.log({ state })
    this.setState({
      ...state
    }, cb)
  }

  handlePageChange = (page, cb = () => { }) => {
    console.log(cb)
    this.setState({
      currentPage: page
    }, cb)
  }

  render() {
    const { level, currentPage, playerName, moves, seconds, gamePlayed } = this.state;

    return (
      <>
        {
          currentPage === 'FrontPage' && (
            <FrontPage
              handleStateChange={this.handleStateChange}
              handlePageChange={this.handlePageChange}
            />
          )
        }

        {
          currentPage === 'LeaderBoard' && (
            <LearderBoardPage
              level={level}
              moves={moves}
              seconds={seconds}
              handleStateChange={this.handleStateChange}
              khiladi={playerName}
              gamePlayed={gamePlayed}
              handlePageChange={this.handlePageChange}
            />

          )
        }

        {
          currentPage === 'Game' && (
            <GameLevels
              level={level}
              handleStateChange={this.handleStateChange}
              handlePageChange={this.handlePageChange}
            />
          )
        }
      </>
    );
  }
}

export default App;
