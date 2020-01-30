import React from "react";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <div className="content">
      <MyPosts posts={props.posts} />
      <ProfileInfo />
    </div>
  );
};

export default Profile;
