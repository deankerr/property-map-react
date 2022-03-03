import './App.css'
// import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

import Map from './Map'
import Navigation from './Navigation'
import SearchForm from './SearchForm'
// import Listing from './components/Listing'
// import Favourites from './components/Favourites'

export default function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col lg={4} className="justify-content-center">
            <h1 className="text-center mt-4">Propertify</h1>
            <Navigation />

            <Switch>
              <Route path="/listing/:id"></Route>

              <Route path="/rent">
                <SearchForm listingType="Rent" />
              </Route>

              <Route path="/buy">
                <SearchForm listingType="Sale" />
              </Route>

              <Route path="/favourites"></Route>

              <Route exact path="/">
                <h6 className="text-center">Select an option above to begin!</h6>
              </Route>

              <Route path="*">
                <h6 className="text-center">Page not found</h6>
              </Route>
            </Switch>
          </Col>

          <Col lg={8} className="mapContainer shadow-lg px-0" style={{ height: '100vh' }}>
            <Map />
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

//   const [searchCache, setSearchCache] = useState({})
//   function saveSearchCache(data) {
//     console.log(`Saving to searchCache`, data)
//     setSearchCache(data)
//   }

//   const [listingCache, setListingCache] = useState([])

//   function saveListingToCache(data) {
//     console.log(`Saving to listingCache id: ${data.id}`)
//     const newCache = [...listingCache, data]
//     console.log(`New cache is:`, newCache)
//     setListingCache(newCache)
//   }

//   return (

//   )
