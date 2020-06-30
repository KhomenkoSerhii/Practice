import React, {useState} from "react";
import "./Dialogs.scss";
import DialogItem from './DialogItem/DialogsItem'
import DialogsMessage from './Message/DialogsMessage'
import Modal from 'react-modal';
const addNewMessages = React.createRef()



const Dialogs = props => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const state = props.dialogsPage
  // debugger
  const dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
 
  const messagesElements = state.messages.map(m => (
  <DialogsMessage message={m.message} key={m.id} id={m.id} />
  ));
  const newMessageBody = state.newMessageBody;


const onNewMessageChange = (e) => {
  const body = e.target.value
  props.updateNewMessageBodyCreator(body)
}

const onSendMessageClick = () => {
  props.sendMessage()

}





function closeModal(){
  setIsOpen(false);
}
  return (
    <div className="dialogs">
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen} onClose={() => setIsOpen(false)}
          contentLabel="Example Modal"
          // ariaHideApp={false}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
       
        
        >
 
         
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
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
 Modal.setAppElement('body')

export default Dialogs;
