import React, { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import { githubUri } from "../utils/uri";
import { ID } from "../utils/types";
import UserInfo from "../components/UserInfo";
import MakeRepoDetails from "../components/RepoDetails";
import MakeChart from "../components/Chart";


import GhPolyglot from "gh-polyglot";


function User(props) {
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const query = new URLSearchParams(window.location.search)
        const userData = await fetchData(`${githubUri}/${query.get(ID) || ''}`);

        const me = new GhPolyglot(query.get(ID));

        me.getAllRepos((_, data) => {
          let repoArr = data.map(repo => {
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
          setRepos(repoArr);

          me.userStats((_, data) => {
            setUserStats(data);
            setUserData(userData);
            setLoading(false)
          });
        });
      } catch (e) {
        // loading false
      }
    })()
  }, [])

  return (
    <div className="container-user">
      {
        !loading ? (
          <>
            < UserInfo data={userData} />
            < MakeChart stats={userStats} repos={repos} />
            <MakeRepoDetails repos={repos} userStat={userStats} />
          </>
        ) : (
            <div className="lds-ellipsis">
              <div></div><div></div><div></div><div></div>
            </div>
          )
      }
    </div>
  )
}

export default User;