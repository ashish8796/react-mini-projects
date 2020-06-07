/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
/* eslint-disable no-lone-blocks */
import React, { useState, useRef, useEffect } from 'react';

function LearderBoardPage(props) {
  const [players, setPlayers] = useState([])

  let { handlePageChange = () => { }, handleStateChange = () => { }, khiladi, level, moves, seconds, gamePlayed } = props;
  let easyPlayerArr = [];
  let mediumPlayerArr = [];
  let hardPlayerArr = [];

  useEffect(() => {
    if (gamePlayed) {
      const myPlayer = {
        khiladi,
        level,
        moves,
        seconds
      }

      setPlayers([...players, myPlayer])
    }
  }, [gamePlayed])

  const sortArray = (arr) => {
    arr.sort((a, b) => {
      if (a.moves === b.moves) {
        return a.seconds - b.seconds;
      }
      return a.moves - b.moves;
    });

    return arr;
  }

  switch (level) {
    case "easy": {
      let arr = players.filter(player => player.level === 'easy');
      easyPlayerArr = sortArray(arr).slice(0, 5)
    };
      break;
    case "medium": {
      let arr = players.filter(player => player.level === 'medium');
      mediumPlayerArr = sortArray(arr).slice(0, 5)
    };
      break;
    case "hard": {
      let arr = players.filter(player => player.level === 'hard');
      hardPlayerArr = sortArray(arr).slice(0, 5)
    }
      break;
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
          {addPlayer(easyPlayerArr)}
        </div>
        <h2>5 High Score Medium level</h2>
        <div className="medium-score table " >
          <div className="table-heading row">
            <div className="name head">Name</div>
            <div className="moves head">Moves</div>
            <div className="time head">Time</div>
          </div>
          {addPlayer(mediumPlayerArr)}
        </div>
        <h2>5 High Score Hard level</h2>
        <div className="hard-score table">
          <div className="table-heading row">
            <div className="name head">Name</div>
            <div className="moves head">Moves</div>
            <div className="time head">Time</div>
          </div>
          {addPlayer(hardPlayerArr)}
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