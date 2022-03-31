import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

import Map from './Map'
import Navigation from './Navigation'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

export default function App() {
  const [resultsCache, setResultsCache] = useState({})

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xl={3} lg={4} className="justify-content-center text-center">
            <a href="/" style={{ color: '#000', textDecoration: 'none' }}>
              <h1 className="text-center mt-4 display-4">Propertify</h1>
            </a>
            <Navigation />

            <Switch>
              <Route path="/listing/:id"></Route>

              <Route path="/rent">
                <SearchForm listingType="rent" />
              </Route>

              <Route path="/buy">
                <SearchForm listingType="sale" />
              </Route>

              <Route exact path="/">
                <h6 className="text-center">Select an option above to begin!</h6>
              </Route>

              <Route path="*">
                <h6 className="text-center">Page not found</h6>
              </Route>
            </Switch>

            <Route path="/rent/:suburb/:state/:priceMin/:priceMax/:bedsMin/:bathsMin">
              <SearchResults listingType="rent" cache={resultsCache} setCache={setResultsCache} />
            </Route>

            <Route path="/buy/:suburb/:state/:priceMin/:priceMax/:bedsMin/:bathsMin">
              <SearchResults listingType="sale" cache={resultsCache} setCache={setResultsCache} />
            </Route>
          </Col>

          <Col xl={9} lg={8} className="mapContainer shadow-lg px-0" style={{ height: '100vh' }}>
            <Map listings={resultsCache.listings} />
          </Col>
        </Row>
      </Container>
    </Router>
  )
}
