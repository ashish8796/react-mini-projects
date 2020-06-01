import React, { useState } from 'react'

const Icon = (props) => {
  const { icon } = props;
  const ClickedOnIcon = props.onMatchIcon;
  // console.log(props)
  const [showIcon, setShowIcon] = useState(false);

  const handleClickOnIcon = () => {
    setShowIcon(!showIcon);
  }

  return (
    <div className={`icon ${!showIcon && "hide"}`} onClick={() => {
      handleClickOnIcon();
      ClickedOnIcon(icon);
    }}>
      <i className={`${icon} ${!showIcon && "hide-icon"}`}></i>
    </div>
  )
}

export default Icon;
