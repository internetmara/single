import React from "react";
import '../stylesheets/buttons.css'
import RefreshIcon from '@mui/icons-material/Refresh';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function handleClose() {
  alert("you can't cancel me, only god can judge me.")
}

const Buttons = () => {
  return (
    <div className="buttons">
      <RefreshIcon className="refresh button"/>
      <CloseIcon className="close button" onClick={handleClose}/>
      <StarIcon className="primary button"/>
      <FavoriteIcon className="favorite button" />
      <a href="https://www.venmo.com/jellymara"><AttachMoneyIcon className="money button"/></a>
    </div>
  )
}

export default Buttons;