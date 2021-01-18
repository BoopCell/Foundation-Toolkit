import React from 'react';

//Remember that this is the way you destructure and use props!
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