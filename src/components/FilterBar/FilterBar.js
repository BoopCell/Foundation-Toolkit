import React from 'react';
// import 'FilterBar.css';
import FilterButton from '../FilterButton/FilterButton';

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