import React from 'react';

function FilterButton(
  {buttonTitle,
  buttonSubtitle}){
    return(
    <li>
        <button>
        {buttonTitle}
        {buttonSubtitle}
        </button>
    </li>
  )
}
export default FilterButton ;