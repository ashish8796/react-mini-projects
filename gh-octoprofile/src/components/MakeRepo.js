/* eslint-disable default-case */
import React from "react";

import { faFolder, faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function MakeRepo(props) {
  const { reposArr } = props;
  let color = "";

  const assignColor = (language) => {

    switch (language) {

      case "HTML":
        color = "#ff5733";
        break;
      case "JavaScript":
        color = "yellow";
        break;
      case "CSS":
        color = "#562349";
        break;
      case "":
        color = "#00005c";
        break;
    }

    return color;
  }

  // const options = {
  //   threshold: .8
  // }

  // let observer = new IntersectionObserver(cb, options);


  const repoJsxArr = reposArr.map(repo => (
    <div className="repo" key={repo.id}>
      <div className="repo-link">
        <FontAwesomeIcon icon={faFolder} />
        <a href={`${repo.link}`}>{repo.name} </a>
        <p className="description">{repo.description} </p>
      </div>
      <div className="display-stat">
        <div className="language">
          <span className="language-color" style={{ backgroundColor: assignColor(repo.language) }}></span>
          <p>{repo.language}</p>
        </div>
        <div className="star">
          <FontAwesomeIcon icon={faStar} />
          {repo.star}
        </div>
        <div className="fork">
          <FontAwesomeIcon icon={faCodeBranch} />
          {repo.fork}
        </div>
        <div className="size">
          {repo.size} KB
        </div>
      </div>
    </div >

  ))

  return (
    <>
      {repoJsxArr}
    </>
  )
}