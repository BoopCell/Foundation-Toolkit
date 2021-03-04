

// - Enable import a separate image for each time I use this component
import React, { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import GridHeader from './components/GridHeader/GridHeader';

import Styles from './App.module.css';

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

//App
function App() {

  const [filterData,setFilterData] = useState([]);// [default value, setValue], pass the initial value. Rule of thumb: Always pass an initial value corresponding to the data format you are going to receive
  const [toolData,setToolData] = useState([]);// [default value, setValue], pass the initial value Rule of thumb: Always pass an initial value corresponding to the data format you are going to receive
  const [ogToolData,setOgToolData] = useState([]);// [default value, setValue], pass the initial value
  const [isLoading, setIsLoading] = useState(true); //best practice for booleans is the use isLoading or similar 

  useEffect(() => {
    fetch("https://api.github.com/users/hacktivist123/repos") //Response is from a restless api or graphql
    .then((tempFilterContainer) => tempFilterContainer.json())
    .then((jsonFilterContainer) => {
    setFilterData(jsonFilterContainer)
    setIsLoading(false);
    });
    }, []); // empty = whenever a change is made to the DOM. [] = only one.  : when to trigger useEffect

  useEffect(() => {
    fetch("https://api.github.com/users/hacktivist123/MARCUS") //Response is from a restless api or graphql
    .then((tempToolContainer) => tempToolContainer.json())
    .then((jsonToolContainer) => {
    setToolData(jsonToolContainer);
    setOgToolData(jsonToolContainer);
    setIsLoading(false);
    });
    }, []);
  
  function handleClick(cat) {
    const filteredToolData = ogToolData.filter(item => item.category.includes(cat)); /* Dry-coding: When you dont repeat yourself. DONT REPEAT YOURSELF! */
    setToolData(filteredToolData)
  }
  
  function handleAllClick() {
    setToolData(ogToolData)
  }

  return (
    
    <>
      <Header 
        headerStyle = {Styles.header}
        headerMenu = "? MENU" 
        headerLogo= "TOOLBOX"
        headerTitle= "Methods & Tools curated by Innovation and Incubation"
        headerMenuHamburger= ""
      />
    {/* {JSON.stringify(toolData)}
    {JSON.stringify(filterData)} */}
{/*       <div className = {Styles.WIP}>WIP</div> */}

      <button onClick = {() => handleClick('SELF-LEADERSHIP')}>
        Button1
      </button>
      <button onClick = {() => handleClick('TEAM')}> {/* As soon as I want to pass a value to the function i need to initiate with an arrow function */}
        Button2
      </button>
      <button onClick = {handleAllClick}>{/* No need to use () here*/}
        Show ALL
      </button>

      <FilterBar
      filterBarStyle = {Styles.filterBar}
      data = {filterData}
      onClickEvent = {handleClick} // Try to think how to get this to work in deeper levels.....
      />

      <GridHeader />
      {isLoading?<div>Loading...</div>:<CardGrid data = {toolData} />} {/* check inside a JSX return: "Conditional rendering", conditional css class e.g. */}

    </>
  )
}

export default App;

// TODO:
// - Read about .map
// - Read on "Styled Components"(npm library needs to be installed) 
// - Read on "CSS Modules" (Used at H&M) (middle way between above and below, npm library that needs to be installed)
// - Read on "CSS file in folder"
// - Install CSS modules
// - Enable SESS & SCSS (read and install, will have to make some mods to webpack)
// - Start adding styling using CSS modules
