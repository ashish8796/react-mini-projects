/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
/* eslint-disable no-lone-blocks */

import React, { useState, useEffect } from 'react';
import { setLocalStorage, checkKeyName, getLocalStorage } from '../utils/localstorage';

function LearderBoardPage(props) {
  const [players, setPlayers] = useState(checkKeyName("players") ? getLocalStorage("players") : [])

  console.log(players)

  let { handlePageChange = () => { }, handleStateChange = () => { }, khiladi, level, moves, seconds, gamePlayed } = props;

  useEffect(() => {
    console.log(gamePlayed)
    if (gamePlayed) {
      const myPlayer = {
        khiladi,
        level,
        moves,
        seconds
      }

      setPlayers([...players, myPlayer])
      handleStateChange({ gamePlayed: false })
    }
  }, [gamePlayed])

  useEffect(() => {
    setLocalStorage("players", players);
  }, [players]);

  const sortArray = (arr) => {
    arr.sort((a, b) => {
      if (a.moves === b.moves) {
        return a.seconds - b.seconds;
      }
      return a.moves - b.moves;
    });

    return arr;
  }

  const addPlayer = (arr) => {
    let players = arr.map(({ khiladi = '', moves = 0, seconds = 0 }, index) => (
      <div className="player row" key={khiladi + index}>
        <div>{khiladi}</div>
        <div>{moves}</div>
        <div>{seconds}</div>
      </div>
    )
    )

    return players;
  }

  return (<React.Fragment>
    <div className="heading">
      <h1>Memory Game</h1>
    </div>
    <div className="leader-board">
      <h1>Leader Board</h1>
      <div className="score-table">
        <h2>5 High Score Easy level</h2>
        <div className="easy-score table">
          <div className="table-heading row">
            <div className="name head">Name</div>
            <div className="moves head">Moves</div>
            <div className="time head">Time</div>
          </div>
          {
            addPlayer(sortArray(players.filter(player => player.level === 'easy')).slice(0, 5))
          }
        </div>
        <h2>5 High Score Medium level</h2>
        <div className="medium-score table " >
          <div className="table-heading row">
            <div className="name head">Name</div>
            <div className="moves head">Moves</div>
            <div className="time head">Time</div>
          </div>
          {
            addPlayer(sortArray(players.filter(player => player.level === 'medium')).slice(0, 5))
          }
        </div>
        <h2>5 High Score Hard level</h2>
        <div className="hard-score table">
          <div className="table-heading row">
            <div className="name head">Name</div>
            <div className="moves head">Moves</div>
            <div className="time head">Time</div>
          </div>
          {
            addPlayer(sortArray(players.filter(player => player.level === 'hard')).slice(0, 5))
          }
        </div>
      </div>
    </div>
    <div className="play-again">Want to Play -> Click <button onClick={() => {
      handlePageChange("FrontPage", () => {
        handleStateChange({
          gamePlayed: false,
          level: '',
          playerName: '',
          moves: 0,
          seconds: 0
        })
      });
    }}>HERE!</button></div>

    <footer>
      <p>Ashish Kumar Saini © All Right Reserved 2030.</p>
    </footer>
  </React.Fragment>)
}

export default LearderBoardPage;