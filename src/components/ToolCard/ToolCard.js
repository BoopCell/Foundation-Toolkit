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
    <div>
      <img src = {ImgURL} alt = {Title} href = {Link}/>
      <h2>{Title}</h2>
      <h3>{Category}</h3>
      <h4>{estTime}</h4> <h4>{grpSize}</h4>
    </div>
  )
}
export default ToolCard;