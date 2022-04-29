import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import Jelly from '../jelly.png'
import '../stylesheets/header.css';

const Header = () => {
  return (
    <div className="header" alt="Jelly logo">
      <IconButton>
        <PersonIcon fontSize="large" />
      </IconButton>
      <a href="/"><img className="jelly" alt="Jelly" src={Jelly}/></a>
      <IconButton>
        <ForumIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default Header;