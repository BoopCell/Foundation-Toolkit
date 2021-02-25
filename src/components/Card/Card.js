import React from 'react';
import Styles from './Card.module.css'
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
    return (
    <li className = {Styles.cardStyles}>
      <a href = {link}> <img className = {Styles.image} src = {imgURL} alt = {title}/> </a>
      <h2 className = {Styles.h2}>{title}</h2>
      <h3 className = {Styles.h3}>{category}</h3>
      <h4 className = {Styles.h4}>{estTime}</h4> <h4 className = {Styles.h4}>{grpSize}</h4>
    </li>
  )
}
export default Card;