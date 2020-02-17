import React from "react";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
