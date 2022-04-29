import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import Jelly from '../jelly.png'
import '../stylesheets/header.css';

const Header = () => {
  return (
    <div className="header" alt="Jelly logo">
      <PersonIcon className="heading-icon" fontSize="large" />
      <img className="jelly" src={Jelly}/>
      <ForumIcon className="heading-icon" fontSize="large" />
    </div>
  )
}

export default Header;