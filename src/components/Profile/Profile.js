import React from 'react';
import MyPosts from './Posts/MyPosts'
import ProfileInfo from './Posts/ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
    <div className='content'>

      <MyPosts />
      <ProfileInfo />
  </div>
    )
}

export default Profile;