import React from "react";
// import "./Posts.scss";

const Posts = props => {
  return (
    <div>
      {props.message} <br/>
  <span>Like {props.likeCount}</span>
     
    </div>
  );
};

export default Posts;
