import React from 'react';
// import 'FilterBar.css';
import FilterButton from '../FilterButton/FilterButton';

function FilterBar({data}) {
    const listItems = data.map((item) => 
            <FilterButton>
            key = {item.desc}
            buttonTitle = {item.desc}
            buttonSubtitle = {item.count} 
            </FilterButton>)
    return (
        <ul>
            {listItems}
        </ul>
    )
}
export default FilterBar;