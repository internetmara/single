import React from "react";
// import PersonIcon from '@mui/icons-material/Person';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Jelly from '../jelly.png'
import '../stylesheets/header.css';
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  let leftButton;
  if (props.leftButton === "x") {
    leftButton = 
      <Link to="/">
        <IconButton>
          <CloseIcon fontSize="large"/>
        </IconButton>
      </Link>
  } else if (props.leftButton === '<') {
    leftButton = 
    <IconButton onClick={() => navigate(-1)}>
      <ArrowBackIosIcon fontSize="large" />
    </IconButton>
  } else {
    leftButton = 
      <Link to="/about">
        <IconButton>
          <HelpOutlineIcon fontSize="large" />
        </IconButton>
      </Link>
  }

  return (
    <div className="header">
      {leftButton}
      <Link to='/'>
        <img className="jelly" alt="Jelly" src={Jelly}/>
      </Link>
      {props.rightButton ? (
        <Link to="/about">
        <IconButton>
          <HelpOutlineIcon fontSize="large" />
        </IconButton>
      </Link>
      ) : (
        <Link to='/chats'>
          <IconButton>
            <ForumIcon fontSize="large" />
          </IconButton>
        </Link>
      )}
    </div>
  )
}

export default Header;