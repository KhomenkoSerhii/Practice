import { combineReducers, createStore } from "redux";
import profileReducer from '../redux/Reducer/profile-reducer'
import dialogsReducer from '../redux/Reducer/Dialogs-reducer'
import sideBarReducer from '../redux/Reducer/Sidebar-reducer'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer
})

const store = createStore(reducers)



export default store