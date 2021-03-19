import React from 'react';
import Styles from './FilterCategory.module.css';
import FilterButton from '../FilterButton/FilterButton';

function FilterCategory({
    listOfData,
    buttonSize, 
    onClickEvent}) {
    const listItems = listOfData?.list.map((item) => //literal if statement
            <FilterButton
            buttonSize = {buttonSize}
            buttonKey = {item.key}
            buttonTitle = {item.desc}
            buttonSubtitle = {item.count}
            onClickEvent = {onClickEvent}
            />)
    return (
        <div className = {Styles.filterCategory}>
            <p>{listOfData?.title}</p>
            <ul className = {Styles.ul}>
                {listItems}
            </ul>
        </div>
    )
}
export default FilterCategory;