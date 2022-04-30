import React, { useState, useEffect } from "react";
import database from './firebase';
import '../stylesheets/cards.css';
import TinderCard from "react-tinder-card";
import { Link } from "react-router-dom";

export default function Cards() {
  const [maras, setMaras] = useState([]);

  useEffect(() => {
    database.collection('maras').onSnapshot(snapshot => (
      setMaras(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <div className="cards">
    <div className="card-container">
      <div className="end">
        <p>You have reached the end of Single.</p>
        <br/>
        <br/> 
        <p>(I guess that means you should just talk to me now...)</p>
        <br/>
        <br/>
        <p>Don't be shy, <Link to="/chats" className="slide">slide into my dms.</Link></p>
      </div>
        {maras.map(mara => (
          <TinderCard
            className="swipe"
            key={mara.name}
            preventSwipe={['up', 'down', 'left']}
          
          >
            <div 
            className="card"
            height="200px"
            style={{ backgroundImage: `url(${mara.img})`}}
            >
              <h3>{mara.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      </div>
  )
}