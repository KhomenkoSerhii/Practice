import React from "react";
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/Reducer/Dialogs-reducer'
import Dialogs from './Dialogs'


const DialogsContainer = props => {

const state = props.store.getState()

const onNewMessageChange = (body) => {
  props.store.dispatch(updateNewMessageBodyCreator(body))
}

const onSendMessageClick = () => {
  props.store.dispatch(sendMessageCreator())
}
  return (
   <Dialogs 
   updateNewMessageBodyCreator={onNewMessageChange} 
   sendMessage={onSendMessageClick}
   dialogsPage={state}
   />
  );
};

export default DialogsContainer;
