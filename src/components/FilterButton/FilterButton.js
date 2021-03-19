import React from 'react';
import Styles from './FilterButton.module.css';

//Remember that this is the way you destructure and use props!
function FilterButton({buttonKey,buttonTitle,buttonSubtitle,onClickEvent}) {
    return(
    <li className = {Styles.filterButton}>
        <button className = {Styles.button} onClick = {onClickEvent} data-category = {buttonKey}>
          <span className = {Styles.h2}>{buttonTitle}</span>
          <span className = {Styles.p}>{buttonSubtitle}</span>
        </button>
    </li>
  )
}
export default FilterButton ;