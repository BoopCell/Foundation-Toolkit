import React from 'react';
import 'Header.css';

function Header(
{
    HeaderLogo, 
    HeaderTitle, 
    HeaderMenuHamburger
}){
    return ( 
    <div className="Header">
        {HeaderLogo}
        {HeaderTitle}
        {HeaderMenuHamburger}
    </div>
    )
} 
export default Header;
