const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
  posts: [
    { message: "wefwe1", likeCount: 12 },
    { message: "wefwe2", likeCount: 23 }
  ],
  newPostText: 'it.....',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      }

      state.posts.push(newPost)
      state.newPostText = ''
      return state

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state

      case SET_USER_PROFILE: {
        return {
          ...state,
          profile: action.profile
        }
      }

      
    default: return state
  }
}


export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
}

export default profileReducer


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})



// export default profileReducer