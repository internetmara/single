import React from "react";
import Header from "./Header";
import Chat from './Chat';
import '../stylesheets/chats.css';

const Chats = () => {
  return (
    <div className="chats">
      <Header leftButton="<" rightButton="?" />
      <div className="chat-list">
        <Chat
          name="Jacob"
          message="Yo, are you single?"
          timestamp="20 seconds ago"
          profilePic="../jacob.png"
        />
        <Chat
          name="Jelly"
          message="mom its me jelly im using ur phone?! i licked it its p good"
          timestamp="2 hours ago"
          profilePic="../jelly.png"
        />
        <Chat
        name="Danny"
        message="I'm horny"
        timestamp="Last week"
        profilePic="../danny.png"
        />
        <Chat
        name="Legolas"
        message="Damn girl, you are so good at making apps"
        timestamp="1 month ago"
        profilePic="../legolas.png"
        />
        <Chat
        name="Deleted"
        message="Sup"
        timestamp="2 months ago"
        />
      </div>
    </div>
  )
}

export default Chats;