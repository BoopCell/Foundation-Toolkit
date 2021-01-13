import React from 'react';
import ToolDetails from '../../assets/ToolDetails'; 
import ToolCard from '../ToolCard/ToolCard'
// import 'CardGrid.css';

//Loop and output the grid
function CardGrid(data) {
    console.log(ToolDetails)
    const listItems = data.map((item) => 
            <ToolCard 
            key = {item.Title}
            cardTitle = {item.Title} 
            cardCategory = {item.Category}
            estTime = {item.TimeEst} 
            ImgURL = {item.ImgURL} 
            estGrpSize = {item.GroupSizeEst}
            cardLink = {item.Link}
            />
    );
    return (
        <ul>
        {listItems}
        </ul>
                    )
}

export default CardGrid;