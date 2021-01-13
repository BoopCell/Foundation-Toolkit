import React from 'react';
function ToolCard(
  {
  Title, 
  Category, 
  estTime,
  grpSize,
  // timeLogo,
  // grpSizeLogo,
  ImgURL,
  Link
  }){
    return (
    <li>
      <a href = {Link}><img src = {ImgURL} alt = {Title}/></a>
      <h2>{Title}</h2>
      <h3>{Category}</h3>
      <h4>{estTime}</h4> <h4>{grpSize}</h4>
    </li>
  )
}
export default ToolCard;