import React from 'react';

function Card(
  {
  title, 
  category, 
  estTime,
  grpSize,
  // timeLogo,
  // grpSizeLogo,
  imgURL,
  link
  }){
    console.log(title);
    return (
    <li>
      <a href = {link}> <img src = {imgURL} alt = {title}/> </a>
      <h2>{title}</h2>
      <h3>{category}</h3>
      <h4>{estTime}</h4> <h4>{grpSize}</h4>
    </li>
  )
}
export default Card;