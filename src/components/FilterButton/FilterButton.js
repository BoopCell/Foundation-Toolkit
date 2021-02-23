import React from 'react';
import Styles from './FilterButton.module.css';

//Remember that this is the way you destructure and use props!
function FilterButton(
  {buttonTitle,
  buttonSubtitle}){;
    return(
    <li className = {Styles.filterButton}>
        <button>
        <h2>{buttonTitle}</h2>  <p>{buttonSubtitle}</p>
        </button >
    </li>
  )
}
export default FilterButton ;