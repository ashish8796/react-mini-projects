import React from "react";

export function MakeStat(props) {
  const { statName, value } = props;

  return (
    <div className={statName}>
      <p>{value}</p>
      <p>{statName}</p>
    </div>
  )
}