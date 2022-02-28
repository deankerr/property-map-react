// import './normalize.css'
import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import Navigation from './components/Navigation'
import Listing from './components/Listing'
import Favourites from './components/Favourites'
import Buy from './components/Buy'
import Rent from './components/Rent'

function App() {

  const [searchCache, setSearchCache] = useState({})
  function saveSearchCache(data) {
    console.log(`Saving to searchCache`, data)
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
        <h1 className="display-3 text-center">Propertify</h1>
        <Navigation />

      <Switch>
        <Route path="/listing/:id">
          <Listing listingCache={listingCache} saveListingToCache={saveListingToCache} searchCache={searchCache} />
        </Route>

        <Route path="/rent">
          <Rent searchCache={searchCache} saveSearchCache={saveSearchCache} />
        </Route>

        <Route path="/buy">
          <Buy searchCache={searchCache} saveSearchCache={saveSearchCache} />
        </Route>

        <Route path="/favourites">
          <Favourites />
        </Route>

        <Route exact path="/">
          <h4 className="text-center">Select an option above to begin!</h4>
        </Route>

        <Route path="*">
          <h4 className="text-center">Page not found</h4>
        </Route>
      </Switch>
    </Router>

  )

}

export default App;
