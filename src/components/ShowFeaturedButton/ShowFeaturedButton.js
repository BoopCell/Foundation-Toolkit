import React from 'react';
// import 'ShowFeaturedButton.css';

function ShowFeaturedButton({
    title
}){
    return ( 
        <li>
            <button>
                {title}
            </button>
        </li>
    )
} 
export default ShowFeaturedButton;