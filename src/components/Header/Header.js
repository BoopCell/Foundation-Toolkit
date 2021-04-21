import React from 'react';
import Styles from './Header.module.css';

function Header(
{
    headerStyle,
    headerMenu,    
    headerLogo, 
    headerTitle, 
    headerMenuHamburger,
    
}){
    return ( 
    <div className= {headerStyle}>
        <div className = {Styles.logoText}> <p className = {Styles.logo}>I&I</p> {headerLogo} </div>
        <div className = {Styles.title} >{headerTitle}</div>
        <Burger></Burger>
        <Menu></Menu>
        <div className = {Styles.menu} > {headerMenu} = {headerMenuHamburger}</div>
        
    </div>
    )
} 
export default Header;
