import React from 'react';
// import 'FilterBar.css';
import FilterCategory from '../FilterCategory/FilterCategory';

function FilterBar({data}) {
    return (
        <>
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
        </>
    )
}
export default FilterBar;