
// If I am making a network request i always need to cover error and loading!
// - Enable import a separate image for each time I use this component
import React, { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import GridHeader from './components/GridHeader/GridHeader';
import Styles from './App.module.css';
import Button from './components/Button/Button'

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
  const [isFilterError, setIsFilterError] = useState(false); //
  const [isCardError, setIsCardError] = useState(false); //
  //Too many states (8+) - Then use useReduce
 
  useEffect(() => {
    fetch("https://api.github.com/users/hacktivist123/repos") //Response is from a restless api or graphql
    .then((tempFilterContainer) => tempFilterContainer.json())
    .then((jsonFilterContainer) => {
    setFilterData(jsonFilterContainer)
    setIsLoading(false);  
    },
    (responseFilterError) => {
      setIsFilterError(responseFilterError);
    });

  }, []); // empty = whenever a change is made to the DOM. [] = only one.  : when to trigger useEffect

  useEffect(() => {
    fetch("https://api.github.com/users/hacktivist123/MARCUS") //Response is from a restless api or graphql
    .then((tempToolContainer) => tempToolContainer.json())
    .then((jsonToolContainer) => {
    setToolData(jsonToolContainer);
    setOgToolData(jsonToolContainer);
    setIsLoading(false);
    },

    (responseCardError) => {
      setIsCardError(responseCardError);
    });
  }, []);
  
  function handleClick(e) {
    const buttonTarget = e.target.closest('button');
    const dataCategory = buttonTarget.getAttribute("data-category");
    const filteredToolData = ogToolData.filter(item => item.category.includes(dataCategory));
    return dataCategory === 'ALL' ? setToolData(ogToolData): setToolData(filteredToolData);
  }
  function handleFeature() {
    setToolData(ogToolData.filter(item => item.prio.includes("FEATURED")));
  }
  function handleLatest() {
    const toolDataOnDate = ogToolData.sort(
      function dateCompare(a, b) {
        var dateB = new Date(b.dateAdded);
        var dateA = new Date(a.dateAdded);
        return dateA - dateB;
      });
    setToolData(toolDataOnDate);
  }
  function handleChrono() {
    const toolDataOnAZ = ogToolData.sort(
      function compare(a, b) {
        if (a.title > b.title)
          return 1;
        else
          return -1;
      });
    setToolData(toolDataOnAZ);
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
     <div> ///// </div>
     {JSON.stringify(filterData)} */}

      {!isFilterError&&<FilterBar
      filterBarStyle = {Styles.filterBar}
      data = {filterData}
      onClickEvent = {handleClick}
      />}
      
{console.log(isCardError)}
      <GridHeader style = {Styles.GridHeader}>
                <Button 
                    onClickEvent = {handleLatest}
                    title = "LATEST"
                    buttonStyle = {Styles.buttonL}
                />
                <Button 
                    onClickEvent = {handleChrono}
                    title = "A-Z"
                    buttonStyle = {Styles.buttonL}
                />
                <Button 
                  onClickEvent = {handleFeature}
                  title = "SHOW FEATURED"
                  buttonStyle = {Styles.buttonR}
                />  
      </GridHeader>
      
      {isLoading?<div>Loading...</div>: isCardError?<div>Data error...</div>: <CardGrid data = {toolData} />} 
      {/* check inside a JSX return: "Conditional rendering", conditional css class e.g. */}

    </>
  )
}

export default App;

//  TODO:
// - Make sort by buttons
// - For menu buttons: show/hide something (state will be used)
// 
//  STILL LEFT:
// - how to create a unit test
// - using routes
// - Using context api / redux
// - looking into typescript