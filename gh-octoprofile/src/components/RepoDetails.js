import React, { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import { MakeRepo } from "./MakeRepo";
import { sortArr } from "../utils/sortArr";



function MakeRepoDetails(props) {
  const { data } = props;
  console.log(data);
  const [repos, setRepos] = useState([]);
  const [sortRepoKey, setSortRepoKey] = useState("star");
  const repoUrl = data.repos_url + "?page=1&per_page=100";
  const totalRequest = Math.floor(data.public_repos / 30) + 1;
  // const

  useEffect(() => {
    (async () => {
      try {
        const reposData = await fetchData(repoUrl);
        console.log(reposData)
        const repoArr = reposData.map(repo => {
          return {
            name: repo.name,
            fork: repo.forks_count,
            star: repo.stargazers_count,
            size: repo.size,
            link: repo.html_url,
            id: repo.id,
            language: repo.language,
            description: repo.description
          }
        })
        console.log(reposData)
        sortArr(repoArr, sortRepoKey)
        setRepos(repoArr);
      } catch (e) {
        //  loading false
      }
    })()
  }, [])

  const handleSelect = (e) => {
    setSortRepoKey(e.target.value)
    setRepos(sortArr(repos, sortRepoKey))
  }
  console.log(repos, sortRepoKey)

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
        <MakeRepo reposArr={repos} />
      </div>
    </div>
  )
}

export default MakeRepoDetails;