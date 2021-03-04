import React from 'react';
import Card from '../Card/Card'
import Styles from './CardGrid.module.css';

//Loop and output the grid
function CardGrid({data}) {
    console.log(data) //  Good practice to have a condition of data existing in order to render
    const listItems = data?.map((item) => 
            <Card 
            key = {item.id}
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