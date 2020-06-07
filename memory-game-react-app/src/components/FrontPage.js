import React from "react";

function FrontPage(props) {
  const { handlePageChange = () => { }, handleStateChange = () => { } } = props;

  const onChange = (level = '') => {
    handleStateChange({
      level
    }, () => {
      handlePageChange('Game')
    })
  }

  return (<React.Fragment>
    <div className="heading">
      <h1>Memory Game</h1>
    </div>
    <div className="leader-board">
      <button onClick={() => {
        handlePageChange('LeaderBoard')
      }}>Show Learder Board</button>
    </div>
    <div className="game-template">
      <div className="player-welcome">
        <p>
          Welcome Player!!<br />
        Choose Your Level.
    </p>
      </div>
      <div className="level">
        <div className="easy-level">
          <button onClick={() => {
            onChange('easy')
          }}>Easy</button>
        </div>
        <div className="medium-level">
          <button onClick={() => {
            onChange('medium')
          }}>Medium</button>
        </div>
        <div className="hard-level">
          <button onClick={() => {
            onChange('hard')
          }}>Hard</button>
        </div>
      </div>
    </div>
    <footer>
      <p>Ashish Kumar Saini © All Right Reserved 2030.</p>
    </footer>
  </React.Fragment>)
}

export default FrontPage;