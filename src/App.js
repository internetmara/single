import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';
import './stylesheets/reset.css';
import './App.css';
import React, {Fragment} from 'react';

function App() {
  return (
    <div className='content'>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/chats" element={<Chats/>}/>
            <Route path="/chats/:person" element={<ChatScreen/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
