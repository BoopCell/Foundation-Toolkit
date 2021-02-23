import React from 'react';
import Styles from './FilterCategory.module.css';
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
        <div className = {Styles.filterCategory}>
            <p>{listOfData.title}</p>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}
export default FilterCategory;