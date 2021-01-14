import React from 'react';
import ToolCard from '../ToolCard/ToolCard'
// import 'CardGrid.css';

//Loop and output the grid
function CardGrid({data}) {
    const listItems = data.map((item) => 
            <ToolCard 
            key = {item.title}
            cardTitle = {item.title} 
            cardCategory = {item.category}
            estTime = {item.timeEst} 
            ImgURL = {item.imgURL} 
            estGrpSize = {item.groupSizeEst}
            cardLink = {item.link}
            />
    );
    return (
        <ul>
        {listItems}
        </ul>
                    )
}

export default CardGrid;