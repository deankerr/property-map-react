import './App.css'
// import { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

import Map from './components/Map'
// import Navigation from './components/Navigation'
// import Listing from './components/Listing'
// import Favourites from './components/Favourites'

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={4} className="justify-content-center">
          <h1 className="text-center">Propertify</h1>
        </Col>

        <Col lg={8} className="px-0">
          <Map />
        </Col>
      </Row>
    </Container>
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
//     <Router>
//       <h1 className="display-3 text-center">Propertify</h1>
//       <Navigation />

//       <Switch>
//         <Route path="/listing/:id">
//           <Listing listingCache={listingCache} saveListingToCache={saveListingToCache} searchCache={searchCache} />
//         </Route>

//         <Route path="/rent">
//           <Rent searchCache={searchCache} saveSearchCache={saveSearchCache} />
//         </Route>

//         <Route path="/buy">
//           <Buy searchCache={searchCache} saveSearchCache={saveSearchCache} />
//         </Route>

//         <Route path="/favourites">
//           <Favourites />
//         </Route>

//         <Route exact path="/">
//           <h4 className="text-center">Select an option above to begin!</h4>
//         </Route>

//         <Route path="*">
//           <h4 className="text-center">Page not found</h4>
//         </Route>
//       </Switch>
//     </Router>
//   )
