import React from 'react';
// import 'FilterBar.css';
import FilterCategory from './FilterCategory';

function FilterBar({data}) {
    return (
        <>
        <FilterCategory 
        listOfData = {data.categories}
        />
        <FilterCategory
        listOfData = {data.timeFrames}
        />
        <FilterCategory
        listOfData = {data.groupSizes}
        />
        </>
    )
}
export default FilterBar;