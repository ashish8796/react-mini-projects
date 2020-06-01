import React, { useState } from 'react';
import Icon from './components/Icon';

const symbolEasy = ["fas fa-anchor", "fas fa-fish", "fas fa-feather", "fas fa-wrench", "fas fa-user-md", "fas fa-poo", "fas fa-anchor", "fas fa-fish", "fas fa-feather", "fas fa-wrench", "fas fa-user-md", "fas fa-poo"]

const symbolMedium = ["fas fa-smile", "fas fa-heart", "fas fa-hand-peace", "fas fa-hand-middle-finger", "fas fa-thumbs-up", "fas fa-kiss-wink-heart", "fas fa-dizzy", "fas fa-grin-stars", "fas fa-smile", "fas fa-heart", "fas fa-hand-peace", "fas fa-hand-middle-finger", "fas fa-thumbs-up", "fas fa-kiss-wink-heart", "fas fa-dizzy", "fas fa-grin-stars"]

const symbolHard = ["fas fa-ghost", "fas fa-mask", "fas fa-skull-crossbones", "fas fa-book-dead", "fas fa-poo-storm", "fas fa-robot", "fas fa-cloud-sun", "fas fa-cloud-sun-rain", "fas fa-grin-tongue-squint", "fas fa-grin-tongue-wink", "fas fa-ghost", "fas fa-mask", "fas fa-skull-crossbones", "fas fa-book-dead", "fas fa-poo-storm", "fas fa-robot", "fas fa-cloud-sun", "fas fa-cloud-sun-rain", "fas fa-grin-tongue-squint", "fas fa-grin-tongue-wink"];

function suffleSymbols(arr) {
  for (let i = 0; i < arr.length; i++) {
    let k = Math.floor(Math.random() * (arr.length));
    [arr[i], arr[k]] = [arr[k], arr[i]];
  }

  return arr;
}

function GameLevels(props) {
  let currentSymbols = [];
  let currentLevel = "";
  let matchedIcon = [];
  let iconArr = [];

  const [currentIcon, setCurrentIcon] = useState('');

  const handleClickedIcon = (icon) => {
    setCurrentIcon(icon);
    iconArr.push(icon);
    console.log(iconArr);

    if (currentIcon === iconArr[0]) {

      matchedIcon = [...matchedIcon, ...iconArr];
      iconArr = [];
    }
  }

  switch (props.level) {
    case "easy": {
      currentSymbols = symbolEasy;
      currentLevel = "easy";
    };
      break;
    case "medium": {
      currentSymbols = symbolMedium;
      currentLevel = "medium";
    };
      break;
    case "hard": {
      currentSymbols = symbolHard;
      currentLevel = "hard";
    };
      break;
  }

  const currentShuffledArray = useState(suffleSymbols(currentSymbols))[0];
  console.log(currentShuffledArray);

  return (
    <>
      <div className="game-controls">
        <div className="moves">
          <p>Moves:<span>0</span></p>
        </div>
        <div className="seconds">
          <p>Seconds:<span>0</span></p>
        </div>
      </div>
      <div className={`game-platform ${currentLevel}`} >

        {
          currentShuffledArray && currentShuffledArray.map((symbol, index) => (
            <Icon icon={symbol} key={symbol + index + 1} onMatchIcon={handleClickedIcon} />
          ))
        }
      </div >
    </>
  );
}

export default GameLevels;