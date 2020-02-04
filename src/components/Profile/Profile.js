import React from "react";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <div className="content">
       <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
     
    </div>
  );
};

export default Profile;
