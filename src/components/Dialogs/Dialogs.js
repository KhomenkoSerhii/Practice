import React from "react";
import "./Dialogs.scss";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const addNewMessages = React.createRef()

const addMessages = () => {
  const messages = addNewMessages.current.value;
  alert(messages)
}


const Message = props => {
  return <div>{props.message}</div>;
};

const Dialogs = props => {
  const dialogsElements = props.state.dialogsData.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messagesElements = props.state.dialogMessages.map(m => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className="dialogs">
       <div>
        <textarea ref={addNewMessages}></textarea>
        <button onClick={addMessages}>Send</button>
      </div>
      <div className="dialogsItems">{dialogsElements}</div>
      <div className="messages">{messagesElements}</div>
     
    </div>
  );
};

export default Dialogs;
