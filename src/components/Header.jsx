import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Jelly from '../jelly.png'
import '../stylesheets/header.css';
import { Link, useNavigate } from "react-router-dom";

const Header = ({backButton}) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ? (
          <IconButton onClick={() => navigate(-1)}>
            <CloseIcon fontSize="large"/>
          </IconButton>
        ) : (
          <Link to="/about">
          <IconButton>
            <PersonIcon fontSize="large" />
          </IconButton>
        </Link>
        )
      }
      <Link to='/'>
        <img className="jelly" alt="Jelly" src={Jelly}/>
      </Link>
      <Link to='/chats'>
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header;