import React from "react";
// import MyPostsContainer from "./Posts/MyPosts";
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";
import Users from "./Users/Users";



const Profile = props => {

  return (
    <div className="content">
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer
        store={props.store}
      />
      <Users />



    </div>
  );
};

export default Profile;
