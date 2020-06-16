/* eslint-disable default-case */
import React, { useState, useRef, useEffect } from "react";

import { faFolder, faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function MakeRepo(props) {
  const { reposArr, userStat } = props;
  const [arrLen, setArrLen] = useState(10);
  const targetEelm = useRef(null);

  // console.log(userStat)

  const assignColor = (language) => {

    let index = userStat.findIndex(lang => lang.label === language);

    if (index + 1) return userStat[index].color;

    return userStat[1].color;
  }

  const options = {
    threshold: .8
  }

  let observer = new IntersectionObserver(changeArrLen, options);

  useEffect(() => {
    observer.observe(targetEelm.current)
  })

  function changeArrLen() {
    setArrLen(arrLen + 10);
  }

  const repoJsxArr = reposArr.slice(0, arrLen).map((repo, index) => {
    // let repoElem = document.createEelement("div");
    // repoElem.classList.add("repo");
    // repoElem.setAttribute("key", `${repo.id}`)

    let repoElem = (
      <div className="repo" key={repo.id} ref={(index === arrLen - 1) && targetEelm}>
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
    )

    // if (index === arrLen - 1) {
    //   observer.observe(targetEelm.current)
    // }

    return repoElem;
  })

  return (
    <>
      {repoJsxArr}
    </>
  )
}