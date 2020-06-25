import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ID } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ThemeButton from "../components/Theme";
import myThemeContext from "../components/Context";



function Home(props) {
  let history = useHistory();
  const [userName, setUserName] = useState('');

  const lightMode = myThemeContext()[0];

  return (
    <div className={`container-home ${!lightMode && "dark"}`} style={{ color: lightMode ? "#204051" : "#ccc" }}>
      <div className="search-profile">
        <FontAwesomeIcon icon={faGithub} />
        <h1>Find Your GH OctoProfile</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          history.push(`/user?${ID}=${userName}`);
        }}>
          <input type="text" style={{
            background: lightMode ? "#30333326" : "#1f2f35",
            transition: ".4s",
            color: lightMode ? "#075d77" : "#ffffff"
          }} onChange={(e) => {
            setUserName(e.target.value);
          }} />
        </form>
      </div>
      {ThemeButton()}
    </div>
  )
}

export default Home;