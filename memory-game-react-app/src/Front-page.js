import React from "react";
import LeaderBoard from "./Learder-board";
import GameLevels from "./Game";

function FrontPage(props) {
  const setCurrentPage = props.onClick;
  console.log(props)
  return <React.Fragment>
    <div className="heading">
      <h1>Memory Game</h1>
    </div>
    <div className="leader-board">
      <h1>Leader Board</h1>
      <button onClick={() => {
        setCurrentPage(LeaderBoard)
      }}>Show Learder Board</button>
    </div>
    <div className="game-template">
      <div className="player-welcome">
        <p>
          Welcome<br />
        Choose Your Level.
    </p>
      </div>
      <div className="level">
        <div className="easy-level">
          <button onClick={() => {
            setCurrentPage(GameLevels, "easy");
          }}>Easy</button>
        </div>
        <div className="medium-level">
          <button onClick={() => {
            setCurrentPage(GameLevels, "medium");
          }}>Medium</button>
        </div>
        <div className="hard-level">
          <button onClick={() => {
            setCurrentPage(GameLevels, "hard");
          }}>Hard</button>
        </div>
      </div>
    </div>
    <footer>
      All rights are reserved.
  </footer>
  </React.Fragment>
}

export default FrontPage;