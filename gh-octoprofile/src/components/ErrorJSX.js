import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MakeErrorJsx(props) {
  const { errorType, requests } = props;
  let errorJsx;

  switch (errorType) {

    case "api":
      errorJsx = (
        <div className="no-user">
          <div className="requests">
            <p>{requests} / 60</p>
            <h1>REQUESTS LEFT</h1>
          </div>
          <FontAwesomeIcon icon={faGithub} />
          <h1>G H OctoProfile</h1>
          <p>User Not Found</p>
        </div>
      )
      break;
    case "network":
      errorJsx = (
        <div className="no-internet">
          <FontAwesomeIcon icon={faGithub} />
          <h1>G H OctoProfile</h1>
          <p>Slow or No Internet</p>
        </div>
      )
      break;
    case "limit exceed":
      errorJsx = (
        <div className="limit-exceed">
          <div className="requests">
            <p>0/ 60</p>
            <h1>REQUESTS LEFT</h1>
          </div>
          <FontAwesomeIcon icon={faGithub} />
          <h1>G H OctoProfile</h1>
          <p>Oh no, you hit the  <a href="https://developer.github.com/v3/#rate-limiting" target="_blank">rate limit</a>! Try again later.</p>
        </div>
      )
  }
  return errorJsx;
}