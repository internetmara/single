import React from "react";
import Cards from "./Cards";
import Buttons from "./Buttons";
import Header from "./Header";

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <Cards/>
      <Buttons/>
    </div>
  )
}

export default Home;