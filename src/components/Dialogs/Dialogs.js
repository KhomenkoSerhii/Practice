import React from "react";
import "./Dialogs.scss";
import { NavLink } from "react-router-dom";
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/Reducer/Dialogs-reducer'


const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const addNewMessages = React.createRef()


const Message = props => {
  return <div>{props.message}</div>;
};

const Dialogs = props => {

  const state = props.store.getState().dialogsPage

  const dialogsElements = state.dialogsData.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messagesElements = state.messages.map(m => (
    <Message message={m.message} id={m.id} />
  ));
  const newMessageBody = state.newMessageBody;


const onNewMessageChange = (e) => {
  const body = e.target.value
  props.store.dispatch(updateNewMessageBodyCreator(body))
}

const onSendMessageClick = () => {
 
  props.store.dispatch(sendMessageCreator())
}
  return (
    <div className="dialogs">
      <div className="dialogsItems">{dialogsElements}</div>
      <div className="messages">
       <div>{messagesElements}</div> 

       <div>
         <div> <textarea 
         value={newMessageBody} 
         ref={addNewMessages} 
         placeholder='Enter your message'
         onChange={onNewMessageChange}
         ></textarea> </div>
         <div> <button onClick={onSendMessageClick}>Send</button> </div>
       </div>

        </div>
     
    </div>
  );
};

export default Dialogs;
