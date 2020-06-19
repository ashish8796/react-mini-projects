/* eslint-disable default-case */
import React, { useState, useRef, useCallback } from "react";

import { faFolder, faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flipper, Flipped } from "react-flip-toolkit"


export function MakeRepo(props) {
  const { reposArr, userStat } = props;
  const [arrLen, setArrLen] = useState(9);
  const observer = useRef();
  const lastRepo = useCallback((node) => {

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {

        if (arrLen < reposArr.length) {
          changeArrLen();
        }
      }
    }, { threshold: 1.0 });
    if (node) observer.current.observe(node);
  })

  const assignColor = (language) => {

    let index = userStat.findIndex(lang => lang.label === language);

    if (index + 1) return userStat[index].color;

    return userStat[1].color;
  }

  const internalContent = (link, name, description, language, star, fork, size) => {
    return (
      <>
        <div className="repo-link">
          <FontAwesomeIcon icon={faFolder} />
          <a href={`${link}`}>{name} </a>
          <p className="description">{description} </p>
        </div>
        <div className="display-stat">
          <div className="language">
            <span className="language-color" style={{ backgroundColor: assignColor(language) }}></span>
            <p>{language}</p>
          </div>
          <div className="star">
            <FontAwesomeIcon icon={faStar} />
            {star}
          </div>effect
          <div className="fork">
            <FontAwesomeIcon icon={faCodeBranch} />
            {fork}
          </div>
          <div className="size">
            {size} KB
          </div>
        </div>
      </>
    )
  }

  function changeArrLen() {
    setArrLen(arrLen + 9);
  }

  let repoIdArr = [];
  const repoJsxArr = reposArr.slice(0, arrLen).map((repo, index) => {
    repoIdArr.push(repo.id)
    if (arrLen === index + 1) {
      return (

        <Flipped flipId={repo.id} key={repo.id}>
          <div className="repo" key={repo.id} ref={lastRepo}>
            {internalContent(repo.link, repo.name, repo.description, repo.language, repo.star, repo.fork, repo.size)}
          </div >
        </Flipped>
      )
    }
    return (
      <Flipped flipId={repo.id} key={repo.id}>
        <div className="repo" key={repo.id}>
          {internalContent(repo.link, repo.name, repo.description, repo.language, repo.star, repo.fork, repo.size)}
        </div >
      </Flipped>

    )
  })

  return (
    <Flipper flipKey={repoIdArr.join("")} className="flipper">
      <>
        {repoJsxArr}
      </>
    </Flipper >
  )
}