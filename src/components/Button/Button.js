import React from 'react';
// import '.css';

function Button(
{
    buttonStyle,
    title
}){
    return ( 
            <button className={buttonStyle}> 
                {title}
            </button>
    )
} 
export default Button;