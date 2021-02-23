import React from 'react';
// import 'Header.css';

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
        <div className = "header logo">{headerLogo}</div>
        <div className = "header title">{headerTitle}</div>
        <div className = "header menu"> {headerMenu} = {headerMenuHamburger}</div>
        
    </div>
    )
} 
export default Header;
