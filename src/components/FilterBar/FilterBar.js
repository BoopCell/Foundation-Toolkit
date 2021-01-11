import React from 'react';
// import 'FilterBar.css';

function FilterBar(
    {
        categoryFilterTitle,
        categoryFilterBox,
        timeFilterTitle,
        groupSizeFilterTitle,
        groupSizeFilterBox
    }
) {
    return (
        <div className="FilterBar">
            {categoryFilterTitle}
            {categoryFilterBox}
            {timeFilterTitle}
            {groupSizeFilterTitle}
            {groupSizeFilterBox}
        </div>
    )
}
export default FilterBar;