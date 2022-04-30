import React from "react";
import '../stylesheets/buttons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";


// function handleClose() {
//   alert("you can't cancel me, only god can judge me.")
// }

const Buttons = () => {
  return (
    <div className="buttons">
      <IconButton>
        <ReplayIcon className="replay button"/>
      </IconButton>
      <IconButton>
        <CloseIcon className="close button"/>
      </IconButton>
      <IconButton>
        <StarIcon className="primary button"/>
      </IconButton>
      <IconButton>
        <FavoriteIcon className="favorite button" />
      </IconButton>
      <Link to="https://www.venmo.com/jellymara">
        <IconButton>
        <AttachMoneyIcon className="money button"/>
        </IconButton>
      </Link>
    </div>
  )
}

export default Buttons;