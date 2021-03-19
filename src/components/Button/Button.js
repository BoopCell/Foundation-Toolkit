import React from 'react';
// import '.css';

function Button(
{
    onClickEvent,
    title,
    buttonStyle
}){
    return ( 
            <button className={buttonStyle} onClick={onClickEvent} data-category = {title}> 
                {title}
            </button>
    )
} 
export default Button;