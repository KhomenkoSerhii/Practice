import { combineReducers, createStore } from "redux";
import profileReducer from './Reducer/profileReducer'
import dialogsReducer from './Reducer/Dialogs-reducer'
import sideBarReducer from './Reducer/Sidebar-reducer'
import auth from "./auth";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer,
    auth: auth
})

let store = createStore(reducers)

window.store = store

export default store