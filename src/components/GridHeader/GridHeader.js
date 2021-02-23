import React from 'react';
import Button from '../Button';
import Styles from './GridHeader.module.css';

function GridHeader(){
    return (
        <div className = {Styles.gridHeaderContainer}>
                <ul className = {Styles.box1}>
                    <li>
                        SORT BY:
                    </li>
                    <li>
                    <Button 
                    buttonStyle = {Styles.buttonL}
                    title = "LATEST"
                />
                    </li>
                    <Button 
                    buttonStyle = {Styles.buttonL}
                    title = "A-Z"
                />
                </ul>  

            <div className = {Styles.box2} >
                <Button 
                    buttonStyle = {Styles.buttonR}
                    title = "SHOW FEATURED"/>
            </div>
        </div> 
        )
} 
export default GridHeader;