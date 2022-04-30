import React from "react";
import '../stylesheets/chat.css'
import Avatar from "@mui/material/Avatar";

const Chat = ({name, message, timestamp, profilePic}) => {
  return (
    <div className="chat">
      <div className="chat-left">
        <Avatar className="chat-pic" alt={name} src={profilePic}/>
        <div className="left-text">
          <h1 className="chat-name">{name}</h1>
          <p className="message">{message}</p>
        </div>
        </div>
        <div className="chat-right">
        <p>{timestamp}</p>
      </div>
    </div>
  )
}

export default Chat;