import React from "react";
import "./MyPosts.scss";
import Posts from "./Posts/Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/Reducer/profile-reducer'


const MyPosts = props => {
  const postsElements = props.posts.map(p => (
    <Posts message={p.message} likeCount={p.likeCount} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  };

  const onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div>
      <div>My posts</div>
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        <button onClick={addPost}>Send</button>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
