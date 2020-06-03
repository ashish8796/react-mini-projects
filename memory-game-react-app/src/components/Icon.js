import React from 'react';

const Icon = (props) => {
  const { icon, matchIcon, id, active, animation } = props;

  return (
    <div className={`icon ${!active && "hide"} ${animation && ("animate__animated animate__shakeX")}`} onClick={() => {
      matchIcon(icon, id);
    }}>
      <i className={`${icon} ${!active && "hide-icon"}`} ></i>
    </div>
  )
}

export default Icon;
