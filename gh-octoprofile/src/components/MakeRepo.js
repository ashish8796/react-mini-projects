import React from "react";

export function MakeRepo(props) {
  const { reposArr } = props;

  const repoJsxArr = reposArr.map(repo => (
    <div className="repo" key={repo.id}>
      <a href={`${repo.link}`}>{repo.name} </a>
    </div>
  ))

  return (
    <>
      {repoJsxArr}
    </>
  )
}