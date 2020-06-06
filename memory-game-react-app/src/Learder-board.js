import React, { useState, useRef } from 'react';
import FrontPage from './Front-page';

// let pArr = [{ player: "apple", moves: 72, time: 14 },
// { player: "apple", moves: 55, time: 20 },
// { player: "apple", moves: 72, time: 10 },
// { player: "apple", moves: 55, time: 12 },
// { player: "apple", moves: 82, time: 12 }]

function LearderBoardPage(props) {
  let setPlayerArr;
  let playerArr;
  let { onClick: setCurrentPage, khiladi, level, moves, seconds, gamePlayed } = props;
  const [easyPlayerArr, seteasyPlayerArr] = useState([]);
  const [mediumPlayerArr, setmediumPlayerArr] = useState([]);
  const [hardPlayerArr, sethardPlayerArr] = useState([]);
  const shouldAddPlayer = useRef(true);

  switch (level) {
    case "easy": {
      setPlayerArr = seteasyPlayerArr;
      playerArr = easyPlayerArr;
    };
      break;
    case "medium": {
      setPlayerArr = setmediumPlayerArr;
      playerArr = mediumPlayerArr;
    };
      break;
    case "hard": {
      setPlayerArr = sethardPlayerArr;
      playerArr = hardPlayerArr;
    }
      break;
  }



  if (gamePlayed) {
    if (shouldAddPlayer.current) {
      // playerArr = [...playerArr, ...pArr]

      console.log("playerArr: " + playerArr);
      if (playerArr.length < 5) {
        playerArr = [...playerArr, {
          player: khiladi,
          moves: moves,
          time: seconds
        }].sort((a, b) => {
          if (a.moves === b.moves) {
            return a.seconds - b.seconds;
          }
          return a.moves - b.moves;
        });

        setPlayerArr(playerArr);
      }
      else {
        let index = playerArr.findIndex(player => {
          if (player.moves === moves) {
            return player.seconds > seconds;
          }
          return player.moves > moves;
        })
        playerArr[index] = {
          player: khiladi,
          moves: moves,
          time: seconds
        };
        playerArr.sort((a, b) => {
          if (a.moves === b.moves) {
            return a.seconds - b.seconds;
          }
          return a.moves - b.moves;
        })

        setPlayerArr(playerArr)

      }
    }
    shouldAddPlayer.current = false;

    console.log(playerArr);
    console.log({ easyPlayerArr, mediumPlayerArr, hardPlayerArr });
  }

  const addPlayer = () => {
    let players = playerArr.map((player, index) => {
      return <div className="player row" key={player.player + index}>
        <div>{player.player}</div>
        <div>{player.moves}</div>
        <div>{player.time}</div>
      </div>
    })

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
          {level === "easy" && addPlayer()}
        </div>
        <h2>5 High Score Medium level</h2>
        <div className="medium-score table " >
          <div className="table-heading row">
            <div className="name head">Name</div>
            <div className="moves head">Moves</div>
            <div className="time head">Time</div>
          </div>
          {(level === "medium") && addPlayer()}
        </div>
        <h2>5 High Score Hard level</h2>
        <div className="hard-score table">
          <div className="table-heading row">
            <div className="name head">Name</div>
            <div className="moves head">Moves</div>
            <div className="time head">Time</div>
          </div>
          {(level === "hard") && addPlayer()}
        </div>
      </div>
    </div>
    <div className="play-again">Want to Play -> Click <button onClick={() => {
      setCurrentPage(FrontPage)
    }}>HERE!</button></div>

    <footer>
      <p>Ashish Kumar Saini © All Right Reserved 2030.</p>
    </footer>
  </React.Fragment>)
}

export default LearderBoardPage;