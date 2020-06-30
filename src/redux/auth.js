const SET_USER_DATE = 'SET_USER_DATE'

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const auth = (state = initState, action) => {
    switch(action.type){
        case SET_USER_DATE: 
        return {
            ...state,
            ...action.data,
            isAuth: true
        }
        default:
            return state
    }
}

export const authData = (id, email, login) => ({type: SET_USER_DATE, data: {id, email, login}})

export default auth