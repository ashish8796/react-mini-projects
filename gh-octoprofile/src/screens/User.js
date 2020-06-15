import React, { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import { githubUri } from "../utils/uri";
import { ID } from "../utils/types";
import UserInfo from "../components/UserInfo";
import MakeRepoDetails from "../components/RepoDetails";


function User(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const query = new URLSearchParams(window.location.search)
        const userData = await fetchData(`${githubUri}/${query.get(ID) || ''}`);

        setUserData(userData);
      } catch (e) {
        // loading false
      }
    })()
  }, [])

  return (
    <div className="container-user">
      {
        userData ? (
          <>
            < UserInfo data={userData} />
            <div className="data-shown"></div>
            <MakeRepoDetails data={userData} />
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