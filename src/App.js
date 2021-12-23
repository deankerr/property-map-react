import './normalize.css'
import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Search from './components/Search'
import Listing from './components/Listing'
import Favourites from './components/Favourites'

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
      <div className="App">
        <header>
          <h1>Propertify</h1>
          <nav>
            <Link to="/rent">Rent</Link>
            <Link to="/buy">Buy</Link>
            <Link to="/favourites">Favourites</Link>
          </nav>
        </header>
        
        <hr />

        <Switch>

          <Route path="/listing/:id">
            <Listing listingCache={listingCache} saveListingToCache={saveListingToCache} searchCache={searchCache} />
          </Route>

          <Route path="/rent">
            <Search searchCache={searchCache} saveSearchCache={saveSearchCache} listingType="Rent" />
          </Route>

          <Route path="/buy">
            <Search searchCache={searchCache} saveSearchCache={saveSearchCache} listingType="Sale" />
          </Route>

          <Route path="/favourites">
            <Favourites />
          </Route>

          <Route exact path="/">
            
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
