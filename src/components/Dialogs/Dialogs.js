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

const Message = props => {
  return <div>{props.message}</div>;
};



const Dialogs = props => {

  

 
  const dialogsElements = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id}/>)
  const messagesElements = props.dialogMessages.map((m) => <Message message={m.message} id={m.id}/>)

  return (
    <div className="dialogs">
      <div className='dialogsItems'>
     {dialogsElements}
      </div>
          <div className="messages">
        {messagesElements}
           
          </div>
      
    </div>
        );
      };
      
      export default Dialogs;
