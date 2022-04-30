import React from "react";
import Header from "./Header";
import '../stylesheets/about.css'


const About = () => {
  return (
    <div className="about">
      <Header backButton="/"/>
      <h1 className="title">Welcome to Single!</h1>
      <div className="about-text">
        <p className="explain">I got banned from tinder so I made my own dating app with just a single option:</p>
        <p className="me">me.</p>
        <br/>
        <p className="explain-2">(You can also only swipe in a single direction: right.)</p> 
        <p className="explain-3">Anyway, I'm Mara. I made this app, go fuck yourself.</p>
      </div>
    </div>
  )
}

export default About;