

let store = {
  _state: {
    profilePage: {},
    dialogsPage: {},
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



  // dispatch(action) {
  //   this._state.profilePage = profileReducer(this._state.profilePage, action)
  //   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
  //   this._state.sidebar = sideBarReducer(this._state.sidebar, action)


  //   this._callSubscriber(this._state)
  // }

}



export default store;
window.store = store











