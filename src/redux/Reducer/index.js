import { combineReducers } from 'redux'
import testReducer from './testReducer'
import Users from './Users'

import profileReducer from './profileReducer'
import store from '../reduxStore'


export default combineReducers({
    testReducer,
    Users,
    profileReducer,
    store
})