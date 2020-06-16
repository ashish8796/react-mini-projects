import React, { useEffect, useState } from "react";
// import fetchData from "../utils/fetchData";
import { MakeRepo } from "./MakeRepo";
import { sortArr } from "../utils/sortArr";
import { ID } from "../utils/types";
import GhPolyglot from "gh-polyglot";



function MakeRepoDetails(props) {
  // const { data } = props;

  const [repos, setRepos] = useState([]);
  const [userStats, setUserStats] = useState(null);
  const [sortRepoKey, setSortRepoKey] = useState("stars");
  const query = new URLSearchParams(window.location.search);
  // const ghPolyglot = useRef();
  // const cb = useCallback(() => ghPolyglot.current, [ghPolyglot.current]);


  useEffect(() => {
    const getLangData = (username) => {
      const me = new GhPolyglot(username)
      me.userStats((err, stats) => {
        if (err) {
          console.error('Error:', err);
        }
        setUserStats(stats)
        // console.log(stats)
      });

      me.getAllRepos((err, stats) => {
        if (err) {
          console.log(err)
        }
        else {
          const repoArr = stats.map(repo => {
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
          sortArr(repoArr, sortRepoKey)
          setRepos(repoArr);
        }
      });
    };

    getLangData(query.get(ID));
  }, [])




  // const totalRequest = Math.floor(data.public_repos / 30) + 1;
  // const

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const reposData = await fetchData(repoUrl);
  //       console.log(reposData)

  //       console.log(reposData)

  //     } catch (e) {
  //       //  loading false
  //     }
  //   })()
  // }, [])



  const handleSelect = (e) => {
    setSortRepoKey(e.target.value)
  }
  console.log(new Date);

  useEffect(() => {
    const sorted = sortArr(repos, sortRepoKey);
    console.log({ sorted });
    setRepos([...sorted]);
  }, [sortRepoKey])

  console.log(new Date);

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
        <MakeRepo reposArr={repos} userStat={userStats} />
      </div>
    </div>
  )
}

export default MakeRepoDetails;