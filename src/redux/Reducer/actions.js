import { TEST, USERS } from './types'

export function setTest() {
        return async dispatch => {
                try {
                        dispatch({ type: TEST, price: + 1 })
                } catch (err) {
                        return err;
                }
        }
}

export function setUsers() {

        return async dispatch => {
                try {
                        dispatch({ type: USERS })
                } catch (err) {
                        return err;
                }
        }
}