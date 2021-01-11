// Imports
// - Enable import a separate image for each time I use this component
import logo from './reflection.png';
import timelogo from './clock.png';
import grouplogo from './person-silhoutte.png';
import './App.css';

//App
function ToolCard({cardTitle, cardCategory, estTime,grpSize}) {
  const cardImage = <img src={logo} className="App-logo" alt="logo" />
  const timeLogo =  <img src={timelogo}className="App-time-logo" alt="timelogo" />
  const grpSizeLogo = <img src={grouplogo} className="App-grp-logo" alt="grouplogo" />
  return (
    <div className="App-toolcard">
      {cardImage}
      <h2>{cardTitle}</h2>
      <h3>{cardCategory}</h3>
      {timeLogo} <h4>{estTime}</h4> {grpSizeLogo}  <h4>{grpSize}</h4>
    </div>
  )

}

export default ToolCard;