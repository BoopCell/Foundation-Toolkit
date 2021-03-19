import React from 'react';
import Button from '../Button';
import Styles from './GridHeader.module.css';

function GridHeader({onClickEvent}){
    return (
        <div className = {Styles.gridHeaderContainer}>
                <ul className = {Styles.box1}>
                    <li>
                        SORT BY:
                    </li>
                    <li>
                    <Button 
                    onClickEvent = {onClickEvent}
                    title = "LATEST"
                    buttonStyle = {Styles.buttonL}
                />
                    </li>
                    <Button 
                    onClickEvent = {onClickEvent}
                    title = "A-Z"
                    buttonStyle = {Styles.buttonL}
                />
                </ul>  

            <div className = {Styles.box2} >
                <Button 
                    onClickEvent = {onClickEvent}
                    title = "SHOW FEATURED"
                    buttonStyle = {Styles.buttonR}
                />
            </div>
        </div> 
        )
} 
export default GridHeader;