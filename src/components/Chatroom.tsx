import React, { useState } from 'react'
import startConnection from '../startConnection';
import "../css/chatroom.css";

const  Chatroom = () => {
 
  const { send, createDiv} = new startConnection();
  const [username, setUsername ] = useState<number>(new Date().getTime());
  const [initial, setInitial] = useState<boolean>(true);
  const [text, setText ] = useState<string>("");
  
  const onSend = () => {
    send(username, text)
    if(initial) {
      createDiv(() => {
        console.log("first div")
      })
    }
    setInitial(false)
  }

  return (
      <section className="Chat--main">
        <span><span style={{ color: "white" }}>{username}</span> </span>
        <br />
        <div id="divMessages" className="messages"></div>
        <div className="input-zone">
            <label id="lblMessage" htmlFor="tbMessage">Message</label>
            <input id="tbMessage" className="input-zone-input" type="text" onChange={e => setText(e.target.value)}/>
            <button id="btnSend" onClick={() => onSend()}>Send</button>
        </div>
      </section>
    )
}

export default Chatroom;
//observer text dark yellow, others beige. 