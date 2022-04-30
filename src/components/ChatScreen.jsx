import React, {useState} from "react";
import Header from "./Header";
import '../stylesheets/chat-screen.css';
import Avatar from "@mui/material/Avatar";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: 'Legolas',
      img: '../legolas.png',
      message: "Damn girl, you are so good at making apps"
    },
    {
      name: 'Legolas',
      img: '../legolas.png',
      message: "I'd give you my ring of power."
    },
    {
      message: "...that would have worked on me when I was 13."
    },
  ])
  return (
    <div className="chat-screen">
      <Header leftButton="<" rightButton="?"/>
      <p className="chat-screen-header">YOU MATCHED WITH LEGOLAS ON 10/4/20</p>
      {messages.map(message => (
        message.name ? (
          <div className="chat-screen-message">
            <Avatar
              className="message-img"
              alt={message.name}
              src={message.img}
            />
            <p className="their-message">{message.message}</p>
          </div>
        ) : (
          <div className="chat-screen-message">
            <p className="my-reply">{message.message}</p>
          </div>
        )
      ))}
    </div>
  )
}

export default ChatScreen;