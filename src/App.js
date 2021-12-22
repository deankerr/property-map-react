import './normalize.css'
import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Map from './components/Map'
import Listing from './components/Listing'

function App() {
  
  const [searchCache, setSearchCache] = useState({})
  function saveSearchCache(data) {
    console.log(`Saving to searchCache`)
    setSearchCache(data)
  }


  const [listingCache, setListingCache] = useState([])

  function saveListingToCache(data) {
    console.log(`Saving to listingCache id: ${data.id}`)
    const newCache = [...listingCache, data]
    console.log(`New cache is:`, newCache)
    setListingCache(newCache)
  }

  return (

    <Router>
      <div className="App">
        <h1>properfi</h1>
        <hr />

        <Switch>

          <Route path="/listing/:id">
            <Listing listingCache={listingCache} saveListingToCache={saveListingToCache} searchCache={searchCache} />
          </Route>

          <Route exact path="/">
            <Map searchCache={searchCache} saveSearchCache={saveSearchCache} />
          </Route>

          <Route path="*">
            <p>Page not found</p>
          </Route>

        </Switch>
        
      </div>
    </Router>

  )

}

export default App;
