import React, { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import { MakeRepo } from "./MakeRepo";


function MakeRepoDetails(props) {
  const { data } = props;
  console.log(data);
  const [repos, setRepos] = useState([]);
  const repoUrl = data.repos_url;

  useEffect(() => {
    (async () => {
      try {
        const reposData = await fetchData(repoUrl);
        const repoArr = reposData.map(repo => {
          return {
            name: repo.name,
            fork: repo.forks_count,
            star: repo.stargazers_count,
            size: repo.size,
            link: repo.html_url,
            id: repo.id
          }
        })
        console.log(reposData)
        setRepos(repoArr);
      } catch (e) {
        //  loading false
      }
    })()
  }, [])

  return (
    <div className="repo-detalis">
      <div className="sort-repo">
        <p>
          <em>Top Repos</em> by
        </p>
        <select value="stars">
          <option value="stars">stars</option>
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