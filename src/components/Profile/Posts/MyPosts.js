import React from "react";
import "./MyPosts.scss";
import Posts from "./Posts/Posts";

const MyPosts = props => {
  const postsElements = props.posts.map(p => (
    <Posts message={p.message} likeCount={p.likeCount} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      <div>My posts</div>
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Send</button>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
