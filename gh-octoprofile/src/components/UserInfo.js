import React from "react";

function UserInfo(props) {
  const { data } = props;
  console.log(data.login)
  const userImgSrc = data.avatar_url;

  return (
    <div className="user-info">
      <div className="user-img">
        <img src={userImgSrc} width="300" height="300" alt="" />
      </div>
    </div>
  )
}

export default UserInfo