import React from "react";
import Mara from "../mara.jpg"
import '../stylesheets/cards.css';

const Cards = () => {
  return (
    <div className="cards">
      <h1 className="title">Welcome to Single!</h1>
      <p className="explain">I got banned from tinder so I made my own dating app with just a single option, me. 
      <br/>
      <br/>
      I'm Mara, date me.</p>
      <img className="mara" src={Mara}/>
    </div>
  )
}

export default Cards;