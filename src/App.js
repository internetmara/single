import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Chat from './components/Chat';
import './stylesheets/reset.css';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className='content'>
      <Header/>
      <Router>
        <Routes>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
