import React, { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import { githubUri } from "../utils/uri";
import { ID } from "../utils/types";

function User(props) {
  const [userData, setUserData] = useState(null);
  console.log("User working");

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

  console.log("called before fetching");

  return (
    <div className="container-user">

      <div className="data-shown"></div>
      <div className="repo-details"></div>
    </div>
  )
}

export default User;