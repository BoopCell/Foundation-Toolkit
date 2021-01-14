import React from 'react';
function FilterButton(
  {filterName,
filterCount}){
    return (
    <li>
        <button>
            {filterName} ({filterCount})
        </button>
    </li>
  )
}
export default FilterButton;