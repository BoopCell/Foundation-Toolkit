import React from 'react';
import Button from '../Button';
import Styles from './GridHeader.module.css';

function GridHeader(){
    return (
    <div className = {Styles.gridHeader}>
        <Button
        title = "LATEST"
        />
        <Button
        title = "A-Z"
        />
        <Button
        title = "SHOW FEATURED"
        />
    </div>
    )
} 
export default GridHeader;