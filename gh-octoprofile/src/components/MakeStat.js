import React from "react";

export function MakeStat(props) {
  const { key, value } = props;

  return (
    <div className={key}>
      <p>{value}</p>
      <p>{key}</p>
    </div>
  )
}