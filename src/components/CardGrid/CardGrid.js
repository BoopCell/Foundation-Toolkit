import React from 'react';
import Card from '../Card/Card'
import Styles from './CardGrid.module.css';

//Loop and output the grid
function CardGrid({data}) {
    const listItems = data.map((item) => 
            <Card 
            key = {item.title}
            title = {item.title} 
            category = {item.category}
            estTime = {item.timeEst} 
            imgURL = {item.imgURL} 
            grpSize = {item.groupSizeEst}
            link = {item.link}
            />
    );
    return (
            <ul className = {Styles.cardGridList}>
                {listItems}
            </ul>
                        )
}

export default CardGrid;