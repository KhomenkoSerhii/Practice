const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "wefwe1", likeCount: 12 },
        { message: "wefwe2", likeCount: 23 }
      ],
      newPostText: 'it.....'
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Lean" },
        { id: 3, name: "Alex" },
        { id: 4, name: "Sanyz" },
        { id: 5, name: "Omer" }
      ],
     messages: [
        { id: 1, message: "qwqwdq11" },
        { id: 2, message: "qwqwd222" },
        { id: 3, message: "qwqwd333" },
        { id: 4, message: "qwqwd555" },
        { id: 5, message: "qwqwd666" }
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  getState() {
    return this._state
  },
  rerenderEntireTree() {
    console.log()
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },


  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
      this._state.dialogsPage.newMessageBody = action.body
      this._callSubscriber(this._state)
    }else if (action.type === SEND_MESSAGE){
      const body = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.newMessageBody = ''
      this._state.dialogsPage.messages.push({ id: 6, message: body })
      this._callSubscriber(this._state)
    }
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



export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY, body: body
 }
}

export default store;
window.store = store