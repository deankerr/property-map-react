// import './normalize.css'
import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

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
      <div className="App">
        <header>
          <h1>Propertify</h1>
          <nav>
            <ButtonToolbar className="nav-toolbar">
              <LinkContainer to="/rent">
                <Button>Rent</Button>
              </LinkContainer>
              <LinkContainer to="/buy">
                <Button>Buy</Button>
              </LinkContainer>  
              <LinkContainer to="/favourites">
                <Button>Favourites</Button>
              </LinkContainer>            
            </ButtonToolbar>
            
          </nav>
        </header>
        
        <hr />

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
            <p>Select an option above to begin!</p>
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
