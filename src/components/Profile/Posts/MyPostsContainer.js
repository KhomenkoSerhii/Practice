import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/Reducer/profileReducer'
import MyPosts from "./MyPosts";



const MyPostsContainer = props => {
    // console.log(props)
    // const state = props.store.getState()


    const addPost = () => {
        props.addPostActionCreator()
    };

    const onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <div className='MyPosts'>
            <MyPosts
                updateNewPostText={onPostChange}
                addPost={addPost}
                // posts={state.profilePage.posts}
                // newPostText={state.profilePage.newPostText}
            />

           
        </div>
    );
};

export default MyPostsContainer;
