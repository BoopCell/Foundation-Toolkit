

// - Enable import a separate image for each time I use this component
import React from 'react';
import FilterBar from './components/FilterBar/FilterBar.js';
import Header from './components/Header/Header.js';
import CardGrid from './components/CardGrid/CardGrid.js';
import ToolCard from './components/ToolCard/ToolCard.js';
//import ToolDetails from './assets/ToolDetails.js';

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
        categoryFilterTitle="Browse by Category"
        categoryFilterBox="ENERGIZERS"
        timeFilterTitle="Time frame (minutes)"
        timeFilterBox="5-30"
        groupSizeFilterTitle="Group Size"
        groupSizeFilterBox="2-10"
      />
      <CardGrid
      ToolCard = {<ToolCard/>}
      />
    </>

  )
}

export default App;




// TODO:
// - Read about .map

// Questions:
      //<ToolCard
        // timeLogo={<img src={timelogo} />}
        // grpSizeLogo={<img src={grouplogo} />}
      // />
// - Do I create a separate component to hold the ToolCards? 
// - Do you usually create the entire structure before adding styling or what does the workflow look like?
