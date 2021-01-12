import React from 'react';
// import 'ToolCard.css';

function ToolCard(
  {
  cardTitle, 
  cardCategory, 
  estTime,
  grpSize,
  // timeLogo,
  // grpSizeLogo,
  cardImage
  }){
    return (
    <div className="ToolCard">
      {cardImage}
      <h2>{cardTitle}</h2>
      <h3>{cardCategory}</h3>
      <h4>{estTime}</h4> <h4>{grpSize}</h4>
    </div>
  )
}

export default ToolCard;