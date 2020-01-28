import React from "react";
import "./MyPosts.scss";
import Posts from './Posts/Posts'

const MyPosts = props => {

const postData = [
  {message: 'wefwe1', likeCount: 12},
  {message: 'wefwe2', likeCount: 23}
]

const postsElements = postData.map((p) =>
    <Posts message={p.message} likeCount={p.likeCount} />)

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
     {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;