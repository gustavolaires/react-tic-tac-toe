import React from "react";
import './InfoBox.css';

const InfoBox = (props) => {
  return (
    <div className={ `info-box-container ${props.className || ''}` }>
      { props.children }
    </div>
  )
}

export default InfoBox;