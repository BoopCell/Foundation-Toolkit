
// - Enable import a separate image for each time I use this component
import ToolCard from './components/ToolCard/ToolCard.js';

import FilterBar from './components/FilterBar/FilterBar.js';

//App
function App() {
  return (
//Fragment
    <>
      <FilterBar titleText = "Hello World!"/>
      <ToolCard cardTitle = "End of Year Reflection" cardCategory = "SELF-LEADERSHIP" estTime = "15-60min" grpSize="2-10" />
      <Header  />
    </>
  )
}

export default App;




// TODO:
// - Read about JSX
// - Create component for the header as well