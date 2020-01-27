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
    {id:1, message: 'qwqwdqwd'},
    {id:2, message: 'qwqwdqwd'},
    {id:3, message: 'qwqwdqwd'},
    {id:3, message: 'qwqwdqwd'},
    {id:4, message: 'qwqwdqwd'},
    {id:5, message: 'qwqwdqwd'},
  ]

  return (
    <div className="dialogs">
      <div className='dialogsItems'>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
      </div>
          <div className="messages">
            <Message message={dialogMessages[0].message} id={dialogMessages[0].id} />
            <Message message={dialogMessages[1].message} id={dialogMessages[1].id} />
           
          </div>
      
    </div>
        );
      };
      
      export default Dialogs;
