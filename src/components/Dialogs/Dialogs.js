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

  let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Lean' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Sanyz' },
    { id: 5, name: 'Omer' }
  ]

 
  let dialogMessages = [
    {id:1, message: 'qwqwdq11'},
    {id:2, message: 'qwqwd222'},
    {id:3, message: 'qwqwd333'},
    {id:3, message: 'qwqwd444'},
    {id:4, message: 'qwqwd555'},
    {id:5, message: 'qwqwd666'},
  ]

  
  const dialogsElements = dialogsData.map((d) => <DialogItem name={d.name} id={d.id}/>)
  const messagesElements = dialogMessages.map((m) => <Message message={m.message} id={m.id}/>)

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
