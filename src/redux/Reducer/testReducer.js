import { TEST } from './types'


const initState = {
    price: 10
}

export default (state = initState, action) => {
    switch (action.type){
        case TEST:
            return {
                ...state,
                price: state.price 
            }
            
            default:
                return state
    }
}