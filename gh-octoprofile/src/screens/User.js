import React, { useState, useEffect, memo } from "react";
import fetchData from "../utils/fetchData";
import { githubUri } from "../utils/uri";
import { ID } from "../utils/types";
import UserInfo from "../components/UserInfo";
import MakeRepoDetails from "../components/RepoDetails";
import MakeChart from "../components/Chart";


import GhPolyglot from "gh-polyglot";
import MakeErrorJsx from "../components/ErrorJSX";
import myThemeContext from "../components/Context";

const User = memo((props) => {
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({ data: "" });
  const [repos, setRepos] = useState([]);
  const [userStats, setUserStats] = useState(null);
  const [error, setError] = useState(null);
  const lightMode = myThemeContext()[0];


  useEffect(() => {
    (async () => {
      const query = new URLSearchParams(window.location.search);
      const rawUserData = await fetchData(`${githubUri}/${query.get(ID) || ''}`);

      setUserData(rawUserData);

      const me = new GhPolyglot(query.get(ID));

      me.getAllRepos((_, data) => {
        let repoArr = [];
        if (data) {
          repoArr = Array.isArray(data) ? data.map(repo => {
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
          }) : []
        }

        me.userStats((_, data) => {
          setRepos(repoArr);
          setUserData(rawUserData);
          setUserStats(data);
          setLoading(false)
        });
      });
    })();
  }, [])

  useEffect(() => {
    if (userData.data === "user not found") {
      setError('api');
      setLoading(false);
    }

    if (userData === "TypeError") {
      setError('network');
      setLoading(false);
    }
    if (userData.data === "Request Limit Exceeded") {
      setError('limit exceed');
      setLoading(false);
    }
  }, [userData])

  return (
    <div className="container-user" >
      {
        !loading ? (
          !error ? (
            <>
              < UserInfo userData={userData} />
              {repos.length > 0 && (
                <>
                  < MakeChart stats={userStats} repos={repos} />
                  <MakeRepoDetails repos={repos} userStat={userStats} />
                </>
              )}
            </>
          ) : (
              <MakeErrorJsx errorType={error} requests={userData.requests} />
            )
        ) : (
            <div className="wrapper" style={{ backgroundColor: lightMode ? "#ccc" : "rgb(26, 30, 34)" }}>
              <div className="lds-ellipsis" >
                <div style={{ backgroundColor: lightMode ? "rgb(26, 30, 34)" : "#fff" }}></div><div style={{ backgroundColor: lightMode ? "rgb(26, 30, 34)" : "#fff" }}></div><div style={{ backgroundColor: lightMode ? "rgb(26, 30, 34)" : "#fff" }}></div><div style={{ backgroundColor: lightMode ? "rgb(26, 30, 34)" : "#fff" }}></div>
              </div>
            </div>
          )
      }
    </div >
  )
})

export default User;