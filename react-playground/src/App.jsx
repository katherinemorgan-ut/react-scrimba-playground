import './App.css'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import travelData from './data.js'


function App() {

  const travelElements = travelData.map( entry => {
    return (
    <Entry 
      key={entry.id}
      {...entry}
    />
    )
  })


  return(
    <>
     {travelElements}
    </>
  )
}

export default App
