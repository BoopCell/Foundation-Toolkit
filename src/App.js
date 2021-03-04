

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

  const [filterData,setFilterData] = useState([])// [default value, setValue], pass the initial value
  useEffect(() => {
    fetch("https://api.github.com/users/hacktivist123/repos") //Response is from a restless api or graphql
    .then((tempFilterContainer) => tempFilterContainer.json())
    .then((jsonFilterContainer) => {
    setFilterData(jsonFilterContainer);
    });
    }, []); // empty = whenever a change is made to the DOM. [] = only one.  : when to trigger useEffect

    const [toolData,setToolData] = useState()// [default value, setValue], pass the initial value
  useEffect(() => {
    fetch("https://api.github.com/users/hacktivist123/MARCUS") //Response is from a restless api or graphql
    .then((tempToolContainer) => tempToolContainer.json())
    .then((jsonToolContainer) => {
    setToolData(jsonToolContainer);
    });
    }, []);
    
  function handleClick(cat) {
    const filterData = toolData.filter(item => item.category.includes(cat));
    setToolData(filterData)
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
      <FilterBar
      filterBarStyle = {Styles.filterBar}
      data = {filterData}
      onClickEvent = {handleClick}
      />

      <GridHeader />

      <CardGrid
      data = {toolData}
      />
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

// Questions:
// - Do you usually create the entire structure before adding styling or what does the workflow look like?