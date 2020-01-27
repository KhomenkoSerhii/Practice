import React from "react";
import "./MyPosts.scss";
import Posts from './Posts/Posts'

const MyPosts = props => {

const postData = [
  {message: 'wefwe1', likeCount: 12},
  {message: 'wefwe2', likeCount: 23},
]

  return (
    <div>
      <div>
        My posts
      </div>
      <div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>Send</button>
        
      </div>
      <div>
        <Posts message={postData[0].message} likeCount={postData[0].likeCount} />
        <Posts message={postData[1].message} likeCount={postData[1].likeCount} />
      </div>
    </div>
  );
};

export default MyPosts;