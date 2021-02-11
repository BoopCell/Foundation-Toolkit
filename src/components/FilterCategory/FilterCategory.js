import React from 'react';
// import 'FilterBar.css';
import FilterButton from '../FilterButton/FilterButton';

function FilterCategory({listOfData,buttonSize}) {
    const listItems = listOfData.list.map((item) => 
            <FilterButton
            buttonSize = {buttonSize}
            key = {item.desc}
            buttonTitle = {item.desc}
            buttonSubtitle = {item.count} 
            />)
    return (
        <div>
        <h2>{listOfData.title}</h2>
        <ul>
            {listItems}
        </ul>
        </div>
    )
}
export default FilterCategory;