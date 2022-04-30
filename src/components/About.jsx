import React from "react";
import Header from "./Header";
import '../stylesheets/about.css'


const About = () => {
  return (
    <div className="about">
      <Header leftButton="x"/>
      <h1 className="title">Welcome to Single!</h1>
      <div className="about-text">
        <p className="explain">I got banned from Tinder because I was doing some hacky shit and they thought I was a bot... so, I made my own dating app with just a single option:</p>
        <p className="me">me.</p>
        <p className="explain-2">(You can also only swipe in a single direction...)</p> 
        <img className="dev-pic" src="https://firebasestorage.googleapis.com/v0/b/date-mara.appspot.com/o/devmara.jpg?alt=media&token=2cc92035-5ca4-4910-b47a-26a63ea9831b" alt="Developer"></img>
        <p className="explain-3">Anyway, I'm Mara. I made this app.</p>
        <p className="explain-4">Go fuck yourself. 💖</p>
      </div>
    </div>
  )
}

export default About;