import React from 'react';

const Icon = (props) => {
  const { icon, matchIcon, id, active, animation } = props;

  return (
    <div className={`icon ${!active && "hide"} ${"animate__animated " + animation}`} onClick={() => {
      matchIcon(icon, id);
    }} >
      <i className={`${icon} ${!active && "hide-icon"}`} ></i>
    </div>
  )
}

export default Icon;
