import React from 'react';
import FilterCategory from '../FilterCategory/FilterCategory';

function FilterBar({
    filterBarStyle,
    data,
    onClickEvent
}) {
    return (
        <div className= {filterBarStyle}>
        <FilterCategory
        listOfData = {data?.categories}
        buttonSize = "large"
        onClickEvent ={onClickEvent}
        />
        <FilterCategory
        listOfData = {data?.timeFrames}
        buttonSize = "medium"
        onClickEvent ={onClickEvent}
        />
        <FilterCategory
        listOfData = {data?.groupSizes}
        buttonSize = "small"
        onClickEvent ={onClickEvent}
        />
        </div>
    )
}
export default FilterBar;