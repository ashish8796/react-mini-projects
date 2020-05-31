import React from 'react';

function GameLevels(props) {
  console.log(props)
  if (props.level === "easy") {
    return <div className="game-platform">
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
    </div>
  }

  if (props.level === "medium") {
    return <div className="game-plaform">
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
    </div>
  }

  if (props.level === "hard") {
    return <div className="game-platform">
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
    </div>
  }
}

export default GameLevels;