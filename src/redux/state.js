import profileReducer from '../redux/Reducer/profile-reducer'
import dialogsReducer from '../redux/Reducer/Dialogs-reducer'
import sideBarReducer from '../redux/Reducer/Sidebar-reducer'

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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sideBarReducer(this._state.sidebar, action)


    this._callSubscriber(this._state)
  }

}



export default store;
window.store = store











