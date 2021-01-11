

// - Enable import a separate image for each time I use this component
import React from 'react';
import ToolCard from './components/ToolCard/ToolCard.js';
import FilterBar from './components/FilterBar/FilterBar.js';
import Header from './components/Header/Header.js';

import logo from './reflection.png';
// import timelogo from './clock.png';
// import grouplogo from './person-silhoutte.png';
import HeaderLogo from './';

//App
function App() {
  return (
    //Fragment
    <>
      <Header
        HeaderLogo=""
        //HeaderLogo = {<img src={}/>} 
        HeaderTitle="Methods and Tools curated by Innovation and Incubation"
        // HeaderMenuHamburger = {<img src={...}/>}
        HeaderMenuHamburger=""
      />

      <FilterBar
        categoryFilterTitle="Browse by Category"
        categoryFilterBox="ENERGIZERS"
        timeFilterTitle="Time frame (minutes)"
        timeFilterBox="5-30"
        groupSizeFilterTitle="Group Size"
        groupSizeFilterBox="2-10"
      />

      <ToolCard
        cardTitle="End of Year Reflection"
        cardCategory="SELF-LEADERSHIP"
        estTime="15-60min"
        grpSize="2-10"

        //Do I import the images here or should I do it within the component? Now I "send" the image to the comnponent who then sends it back...
        // cardImage={<img src={logo} />}
        // timeLogo={<img src={timelogo} />}
        // grpSizeLogo={<img src={grouplogo} />}
      />
    </>

  )
}

export default App;




// TODO:
// - Read about JSX

// Questions:
// - Do I create a separate component to hold the ToolCards? 
// - Do you usually create the entire structure before adding styling or what does the workflow look like?
