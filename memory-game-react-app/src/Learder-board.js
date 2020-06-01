import React from 'react';
import FrontPage from './Front-page';

function LearderBoardPage(props) {
  const setCurrentPage = props.onClick;
  return (<React.Fragment>
    <div className="heading">
      <h1>Memory Game</h1>
    </div>
    <div className="leader-board">
      <h1>Leader Board</h1>
      <div className="score-table">
        <h2>5 High Score Easy level</h2>
        <div className="easy-score table">
          <div className="name head">Name</div>
          <div className="moves head">Moves</div>
          <div className="time head">Time</div>
        </div>
        <h2>5 High Score Medium level</h2>
        <div className="medium-score table" >
          <div className="name head">Name</div>
          <div className="moves head">Moves</div>
          <div className="time head">Time</div>
        </div>
        <h2>5 High Score Hard level</h2>
        <div className="hard-score table">
          <div className="name head">Name</div>
          <div className="moves head">Moves</div>
          <div className="time head">Time</div>
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