import React, { useState } from "react";
import { MakeRepo } from "./MakeRepo";
import { sortArr } from "../utils/sortArr";




function MakeRepoDetails({ repos, userStat }) {
  const [sortRepoKey, setSortRepoKey] = useState("stars");

  const handleSelect = (e) => {
    setSortRepoKey(e.target.value)
  }

  const sortedRepos = [...sortArr(repos, sortRepoKey)];

  return (
    <div className="repo-details">
      <div className="sort-repo">
        <p>
          <em>Top Repos</em> by
        </p>
        <select value={sortRepoKey} onChange={handleSelect}>
          <option value="stars" className="stars">stars</option>
          <option value="forks">forks</option>
          <option value="size">size</option>
        </select>
      </div>
      <div className="repos">
        <MakeRepo reposArr={sortedRepos} userStat={userStat} />
      </div>
    </div>
  )
}

export default MakeRepoDetails;