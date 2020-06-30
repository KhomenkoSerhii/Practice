import React from "react";
import "./MyPosts.scss";
import Posts from "./Posts/Posts";
import { connect } from 'react-redux'
import { setTest } from '../../../redux/Reducer/actions'
import './MyPosts.scss'

const MyPosts = props => {
  // console.log(props)
  // const postsElements = props.posts.map(p => (
  //   <Posts 
  //   message={p.message} 
  //   likeCount={p.likeCount} />
  // ));

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost()
  };

  const onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }


  return (
    <div className='main-block'>
      <div>My posts</div>
      <div>
       
        <textarea ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText} />
        <button
          onClick={onAddPost}>Send</button>
      </div>
      {/* <div>{postsElements}</div> */}


    </div>
  );
};
const mapStateToProps = (state) => ({
  price: state.testReducer.price,
})
const mapDispatchToProps = (dispatch) => ({
  setTest
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
