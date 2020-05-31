import React from 'react';

function LearderBoardPage(props) {
  return <React.Fragment>
    <div className="heading">
      <h1>Memory Game</h1>
    </div>
    <div className="leader-board">
      <h1>Leader Board</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Moves</th>
            <th>Time</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </React.Fragment>
}

export default LearderBoardPage;