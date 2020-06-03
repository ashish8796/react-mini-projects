import React, { useState, useEffect } from 'react';
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
  const [suffledArray, setSuffledArray] = useState([]);
  const [matchedArr, setMatchedArr] = useState([]);
  const [iconArr, setIconArr] = useState([]);
  const [animate, setAnimate] = useState(false);

  const handleClickedIcon = (icon, id) => {
    if (iconArr.findIndex(i => i.id === id) === -1) {
      setIconArr([...iconArr, {
        iconName: icon,
        id
      }])
    }
  }

  useEffect(() => {
    if (iconArr.length === 2) {
      setAnimate(true);
      if (iconArr[0].iconName === iconArr[1].iconName) {
        setMatchedArr([...matchedArr, ...iconArr]);
      }
      setTimeout(() => {
        setIconArr([]);
      }, 800);
    }
    console.log(iconArr);
  }, [iconArr])

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

  let currentShuffledArray;
  useEffect(() => {
    currentShuffledArray = suffleSymbols(currentSymbols);
    setSuffledArray(currentShuffledArray);
    // console.log(currentShuffledArray);
  }, [])

  // We shuffled our array [DONE]
  // PAir of icons is matched the push into array 
  // console.log({ matchedArr })

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
          suffledArray && suffledArray.map((symbol, index) => {
            const id = symbol + index + 1;
            return (
              <Icon
                icon={symbol}
                key={symbol + index + 1}
                matchIcon={handleClickedIcon}
                id={id}
                active={(iconArr.findIndex(i => i.id === id) !== -1) || (matchedArr.findIndex(i => i.id === id) !== -1)}
                animation={animate}
              />
            )
          })
        }
      </div >
    </>
  );
}

export default GameLevels;