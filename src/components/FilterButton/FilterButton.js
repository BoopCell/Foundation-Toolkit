import React from 'react';
import Styles from './FilterButton.module.css';

//Remember that this is the way you destructure and use props!
function FilterButton(
  {buttonTitle,
  buttonSubtitle,
  onClickEvent}){;
    return(
    <li className = {Styles.filterButton}>
        <button className = {Styles.button} onClick = {onClickEvent} >
        <h2 className = {Styles.h2}>{buttonTitle}</h2>
        <p className = {Styles.p}>{buttonSubtitle}</p>
        </button>
    </li>
  )
}
export default FilterButton ;