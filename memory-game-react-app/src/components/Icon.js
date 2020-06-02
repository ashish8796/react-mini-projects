import React, { useState } from 'react';


let matchArr = [];
let iconArr = [];

const Icon = (props) => {
  const { icon } = props;
  // const ClickedOnIcon = props.onMatchIcon;
  // console.log(props)

  const [showIcon, setShowIcon] = useState(false);
  const [currentIcon, setCurrentIcon] = useState("");
  const [previousIcon, setPreviousIcon] = useState("");


  const handleClickOnIcon = () => {
    setShowIcon(!showIcon);
  }

  const matchIcon = (icon) => {
    console.log("icon: " + icon)
    iconArr.push(icon);
    setCurrentIcon(icon);
    console.log("currenIcon: " + currentIcon);
    if (iconArr.length == 2) {
      setPreviousIcon(iconArr[0]);
      console.log("previousIcon: " + previousIcon);
      console.log("currentIcon: " + currentIcon, "previousIcon: " + previousIcon)
      if (currentIcon === previousIcon) {
        matchArr = matchArr.concat(iconArr);
        // console.log(matchArr)
      }
      iconArr = [];
    }
    console.log(iconArr);
    console.log("mathArr:" + matchArr)
  }

  const manageHideClass = (icon) => {
    // console.log(icon)
    if (showIcon) {
      // console.log("manageHideClass is working.");
      console.log("currentIcon: " + currentIcon, "previousIcon: " + previousIcon)
      if (matchArr.indexOf(icon) + 1) {
        return false;
      }
      return false;
    }
    return true;
  }

  return (
    <div className={`icon ${manageHideClass(icon) && "hide"}`} onClick={() => {
      handleClickOnIcon();
      // ClickedOnIcoSn(icon);
      matchIcon(icon);
    }}>
      <i className={`${icon} ${manageHideClass(icon) && "hide-icon"}`}></i>
    </div>
  )
}

export default Icon;
