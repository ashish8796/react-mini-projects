import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JoinedDate } from "../utils/month";
import { MakeStat } from "./MakeStat";



library.add(fab, faBriefcase, faMapMarkerAlt, faCalendarAlt);

function UserInfo(props) {
  const { data } = props;

  const userImgSrc = data.avatar_url;
  const joinedDate = data.created_at.substring(0, data.created_at.indexOf("T"));
  const repos = data.public_repos;
  const followers = data.followers;
  const following = data.following;

  return (
    <div className="user-info">
      <div className="user-img">
        <img src={userImgSrc} alt="" />
      </div>
      <div className="user-name">
        <h1>{data.name}</h1>
        <a href={`${data.html_url}`}>@{data.login}</a>
      </div>
      <div className="status">
        <div className="company">
          <FontAwesomeIcon icon="briefcase" />
          <p>{data.company}</p>
        </div>
        <div className="location">
          <FontAwesomeIcon icon="map-marker-alt" />
          <p>{data.location}</p>
        </div>
        <div className="joined">
          <FontAwesomeIcon icon="calendar-alt" />
          <p>Joined {JoinedDate(joinedDate)} </p>
        </div>
      </div>
      <div className="stat">
        <>
          <MakeStat statName={"REPOSITORIES"} value={repos} />
          <MakeStat statName={"FOLLOWERS"} value={followers} />
          <MakeStat statName={"FOLLOWING"} value={following} />
        </>
      </div>
    </div>
  )
}

export default UserInfo