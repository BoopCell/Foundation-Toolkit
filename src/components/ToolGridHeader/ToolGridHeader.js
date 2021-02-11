import React from 'react';
import SortByButton from '../SortByButton/SortByButton';
// import 'ToolGridHeader.css';

function ToolGridHeader(){
    return (
    <>
        <SortByButton
        title = "LATEST"
        />
        <SortByButton
        title = "A-Z"
        />
        <ShowFeaturedButton
        title = "SHOW FEATURED"
        />
    </>
    )
} 
export default ToolGridHeader;