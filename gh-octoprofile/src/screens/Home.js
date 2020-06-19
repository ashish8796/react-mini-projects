import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ID } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Home(props) {
  let history = useHistory();

  const { theme = '' } = props;
  const [lightMode, setLightMode] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <div className={`container-home ${!lightMode && theme}`} style={{ color: lightMode ? "#204051" : "#ccc" }}>
      <div className="search-profile">
        <FontAwesomeIcon icon={faGithub} />
        <h1>Find Your GH OctoProfile</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          history.push(`/user?${ID}=${userName}`);
        }}>
          <input type="text" style={{ background: lightMode ? "#30333326" : "#1f2f35" }} onChange={(e) => {
            setUserName(e.target.value);
          }} />
        </form>
      </div>
      <div className="set-theme">
        <div className="switch">
          <input type="checkbox" className={`ckbox ${lightMode && "go-right"}`} onClick={(e) => {
            setLightMode(!lightMode)
          }} />
          <span className="slider round "></span>
        </div>
      </div>
    </div>
  )
}

export default Home;