import React from 'react';
import FilterCategory from '../FilterCategory/FilterCategory';

function FilterBar({
    filterBarStyle,
    data
}) {
    return (
        <div className= {filterBarStyle}>
        <FilterCategory
        listOfData = {data.categories}
        buttonSize = "large"
        />
        <FilterCategory
        listOfData = {data.timeFrames}
        buttonSize = "medium"
        />
        <FilterCategory
        listOfData = {data.groupSizes}
        buttonSize = "small"
        />
        </div>
    )
}
export default FilterBar;