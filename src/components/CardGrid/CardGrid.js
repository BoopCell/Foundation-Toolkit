import React from 'react';
// import ToolDetails from '../assets/ToolDetails.js'; 
import ToolCard from '../ToolCard/ToolCard.js'
// import 'CardGrid.css';


//Loop and output the grid
function CardGrid({ToolDetails}) {
    const listItems = ToolDetails.map((Title,Category,TimeEst,ImgURL,GroupSizeEst,Link) => 
            <ToolCard 
            key = {Title}
            cardTitle = {Title} 
            cardCategory = {Category}
            estTime = {TimeEst} 
            ImgURL = {ImgURL} 
            estGrpSize = {GroupSizeEst}
            cardLink = {Link}
            />
    );
    return (
        <ul>
        {listItems}
        </ul>
                    )
}

export default CardGrid;