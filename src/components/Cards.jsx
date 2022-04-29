import React, { useState, useEffect } from "react";
import database from './firebase';
import '../stylesheets/cards.css';
import TinderCard from "react-tinder-card";

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
        {maras.map(mara => (
          <TinderCard
            className="swipe"
            key={mara.name}
            preventSwipe={['up', 'down']}
          
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