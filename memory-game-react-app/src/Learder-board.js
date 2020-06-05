import React, { useState, useRef } from 'react';
import FrontPage from './Front-page';

function LearderBoardPage(props) {
  let { onClick: setCurrentPage, khiladi, level, moves, seconds } = props;
  const [playerArr, setPlayerArr] = useState([]);
  const shouldAddPlayer = useRef(false);

  console.log(khiladi);
  console.log(level);

  useEffect(() => {
    if (shouldAddPlayer.current) {
      setPlayerArr([...playerArr, {
        player: khiladi,
        moves: moves,
        time: seconds
      }])
    }
  }, [input])



  const addPlayer = () => {
    return <div className="player row">
      <div>{khiladi}</div>
      <div>{moves}</div>
      <div>{seconds}</div>
    </div>
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
          {(level && level === "easy") && addPlayer()}
        </div>
        <h2>5 High Score Medium level</h2>
        <div className="medium-score table " >
          <div className="table-heading row">
            <div className="name head">Name</div>
            <div className="moves head">Moves</div>
            <div className="time head">Time</div>
          </div>
          {(level && level === "medium") && addPlayer()}
        </div>
        <h2>5 High Score Hard level</h2>
        <div className="hard-score table">
          <div className="table-heading row">
            <div className="name head">Name</div>
            <div className="moves head">Moves</div>
            <div className="time head">Time</div>
          </div>
          {(level && level === "hard") && addPlayer()}
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