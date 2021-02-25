

// - Enable import a separate image for each time I use this component
import React from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import GridHeader from './components/GridHeader/GridHeader';
import ToolDetails from './assets/ToolDetails';
import FilterDetails from './assets/FilterDetails';
import Styles from './App.module.css';

//App
function App() {
  return (
    <>
      <Header 
        headerStyle = {Styles.header}
        headerMenu = "? MENU" 
        headerLogo="TOOLBOX"
        headerTitle="Methods & Tools curated by Innovation and Incubation"
        headerMenuHamburger=""
      />

      <FilterBar
      filterBarStyle = {Styles.filterBar}
      data = {FilterDetails}
      />

      <GridHeader/>

      <CardGrid
      data = {ToolDetails}
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