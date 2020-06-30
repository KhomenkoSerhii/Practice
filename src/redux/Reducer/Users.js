import { USERS } from './types'

const initState = {
    users: []
}

export default (state = initState, action) => {
    switch (action.type){
        case USERS:
            return {
                ...state,
                users: state.users
            }
            default:
            return state
    }
}