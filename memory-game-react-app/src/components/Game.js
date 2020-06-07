/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon';
import { easyLevel, mediumLevel, hardLevel } from '../utils/levels';
import shuffleArray from './../utils/shuffleArray'



function GameLevels(props) {
  const {
    handleStateChange = () => { },
    level = '',
    handlePageChange = () => { }
  } = props;

  let currentSymbols = [];
  let currentLevel = "";
  let firstTimeClick = useRef(false);

  const [suffledArray, setSuffledArray] = useState([]);
  const [matchedArr, setMatchedArr] = useState([]);
  const [iconArr, setIconArr] = useState([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [saveProgress, setSaveProgress] = useState(true);
  const [khiladi, setPlayerName] = useState("");
  const interval = useRef();

  const handleClickedIcon = (icon, id) => {
    const isMatched = iconArr.findIndex(i => i.id === id) === -1 && iconArr.length < 2;

    if (isMatched) {
      setIconArr([...iconArr, {
        iconName: icon,
        id
      }])
    }
  }

  switch (level) {
    case "easy": {
      currentSymbols = easyLevel;
      currentLevel = "easy";
    };
      break;
    case "medium": {
      currentSymbols = mediumLevel;
      currentLevel = "medium";
    };
      break;
    case "hard": {
      currentSymbols = hardLevel;
      currentLevel = "hard";
    };
      break;
    default: {
      currentSymbols = [];
    }
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
      interval.current = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    }

    if (matchedArr.length === currentSymbols.length && interval.current) {
      clearInterval(interval.current);
      setGameCompleted(true);
    }
  }, [iconArr])

  useEffect(() => {
    let currentShuffledArray = shuffleArray(currentSymbols);
    setSuffledArray(currentShuffledArray);
  }, [])

  const onChangeFormInput = (e) => {
    const { value: playerName } = e.target;
    setPlayerName(playerName);
  }

  return (
    <>
      {
        gameCompleted && (
          <div className="game-finished">
            <div className="game-completed animate__animated animate__zoomInDown">
              <h1><em>Congratulation!! </em> You Completed the game with {moves} moves in {seconds} seconds. </h1>
              {saveProgress ?
                (
                  <div className="save-progres">
                    <button onClick={() => {
                      setSaveProgress(false);
                    }} >Save Score</button>
                    <button onClick={() => {
                      handlePageChange('FrontPage')
                    }}>Exit</button>
                  </div>
                ) :
                (
                  <div className="enter-name">
                    <h1>Enter Your Name</h1>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      console.log("called")
                      handlePageChange('LeaderBoard', () => {
                        handleStateChange({
                          level,
                          playerName: khiladi,
                          moves,
                          seconds,
                          gamePlayed: true
                        })
                      });
                    }}>
                      <input type="text" onChange={onChangeFormInput} autoFocus={true} />
                      <button type="submit">Save Score</button>
                    </form>
                  </div>
                )
              }
            </div>
          </div>
        )
      }

      <div className="game-controls">
        <div className="moves">
          <p>Moves: {moves}</p>
        </div>
        <div className="seconds">
          <p>Seconds: {seconds}</p>
        </div>
        <div className="restart-game">
          <p>Play Again: </p> <i className="fas fa-redo" onClick={() => {
            handlePageChange('FrontPage', () => {
              handleStateChange({ level: '' })
            })
          }}></i>
        </div>
      </div>
      <div className={`game-platform ${currentLevel}`} >
        {
          suffledArray && suffledArray.map((symbol, index) => {
            const id = symbol + index + 1;

            let active = (iconArr.findIndex(i => i.id === id) !== -1) || (matchedArr.findIndex(i => i.id === id) !== -1);

            let animation = (iconArr.findIndex(i => i.id === id) !== -1 && iconArr.length === 2) && (iconArr[0].iconName !== iconArr[1].iconName ? "animate__shakeX" : "animate__heartBeat")

            return (
              <Icon
                icon={symbol}
                key={symbol + index + 1}
                matchIcon={handleClickedIcon}
                id={id}
                active={active}
                animation={animation}
              />
            )
          })
        }
      </div >
    </>
  );
}

export default GameLevels;