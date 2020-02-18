const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
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
  }

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: 6, message: body })
            return state
        default: return state
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


export default dialogsReducer










