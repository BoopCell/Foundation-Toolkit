

// - Enable import a separate image for each time I use this component
import React from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import GridHeader from './components/GridHeader/GridHeader';
import ToolDetails from './assets/ToolDetails';
import FilterDetails from './assets/FilterDetails';


//App
function App() {
  return (
    //Fragment
    <>
      <Header
        HeaderLogo=""
        // HeaderLogo = {<img src={}/> alt=""} 
        HeaderTitle="Methods and Tools curated by Innovation and Incubation"
        // HeaderMenuHamburger = {<img src={}/> alt=""}
        HeaderMenuHamburger="MENU"
      />

      <FilterBar
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