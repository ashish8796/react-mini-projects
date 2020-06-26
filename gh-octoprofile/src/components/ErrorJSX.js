/* eslint-disable default-case */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ThemeButton from "./Theme";
import myThemeContext from "./ThemeContext";



export default function MakeErrorJsx(props) {
  const { errorType, requests } = props;
  const lightMode = myThemeContext()[0];

  let errorJsx;

  const requestsJsx = () => {
    return (
      <div className="requests">
        <p style={{ color: lightMode && "#454545" }}>{requests} / 60</p>
        <h1>REQUESTS LEFT</h1>
      </div>
    )
  }

  const faIcon = () => {
    return (
      <>
        <FontAwesomeIcon icon={faGithub} style={{ color: !lightMode ? "#ccc" : "rgb(32, 64, 81)" }} />
        <h1>G H OctoProfile</h1>
      </>
    )
  }

  switch (errorType) {

    case "api":
      errorJsx = (
        <>
          {requestsJsx()}
          <div className="no-user" style={{
            backgroundColor: lightMode ? "#ccc" : "rgb(26, 30, 34)",
            color: !lightMode ? "#ccc" : "rgb(32, 64, 81)"
          }}>
            {faIcon()}
            <p>User Not Found</p>
          </div>
        </>
      )
      break;
    case "network":
      errorJsx = (
        <>
          <div className="no-internet" style={{
            backgroundColor: lightMode ? "#ccc" : "rgb(26, 30, 34)",
            color: !lightMode ? "#ccc" : "rgb(32, 64, 81)"
          }}>
            {faIcon()}
            <p>Slow or No Internet</p>
          </div>
        </>
      )
      break;
    case "limit exceed":
      errorJsx = (
        <>
          < div className="limit-exceed" style={{
            backgroundColor: lightMode ? "#ccc" : "rgb(26, 30, 34)",
            color: !lightMode ? "#ccc" : "rgb(32, 64, 81)"
          }}>
            <div className="requests">
              <p>0/ 60</p>
              <h1>REQUESTS LEFT</h1>
            </div>
            {faIcon()}
            <p>Oh no, you hit the  <a href="https://developer.github.com/v3/#rate-limiting" target="_blank">rate limit</a>! Try again later.</p>
          </div >
        </>
      )
  }
  return (
    <>
      {ThemeButton()}
      {errorJsx}
    </>

  );
}