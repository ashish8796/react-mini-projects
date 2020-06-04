import React, { useState, useEffect, useRef } from 'react';
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

let interval;

function GameLevels(props) {
  let currentSymbols = [];
  let currentLevel = "";
  let firstTimeClick = useRef(false);

  const [suffledArray, setSuffledArray] = useState([]);
  const [matchedArr, setMatchedArr] = useState([]);
  const [iconArr, setIconArr] = useState([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleClickedIcon = (icon, id) => {

    if (iconArr.findIndex(i => i.id === id) === -1 && iconArr.length < 2) {
      setIconArr([...iconArr, {
        iconName: icon,
        id
      }])
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

  useEffect(() => {
    if (iconArr.length === 2) {
      if (iconArr[0].iconName === iconArr[1].iconName) {
        setMatchedArr([...matchedArr, ...iconArr]);
      }
      setTimeout(() => {
        setIconArr([]);
      }, 700);
      setMoves(moves + 1);
    }
  }, [iconArr])

  useEffect(() => {
    if (!firstTimeClick.current && iconArr.length > 0) {
      firstTimeClick.current = true;
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    }

    if (matchedArr.length === currentSymbols.length) {
      clearInterval(interval);
    }
  }, [iconArr])

  useEffect(() => {
    let currentShuffledArray = suffleSymbols(currentSymbols);
    setSuffledArray(currentShuffledArray);
  }, [])

  return (
    <>
      <div className="game-controls">
        <div className="moves">
          <p>Moves: {moves}</p>
        </div>
        <div className="seconds">
          <p>Seconds: {seconds}</p>
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
                animation={(iconArr.findIndex(i => i.id === id) !== -1 && iconArr.length === 2) && (iconArr[0].iconName !== iconArr[1].iconName ? "animate__shakeX" : "animate__heartBeat")}
              />
            )
          })
        }
      </div >
    </>
  );
}

export default GameLevels;