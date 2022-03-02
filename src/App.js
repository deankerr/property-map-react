import './App.css'
// import { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import Map from './components/Map'
import Navigation from './components/Navigation'
// import Listing from './components/Listing'
// import Favourites from './components/Favourites'

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={4} className="justify-content-center">
          <h1 className="text-center">Propertify</h1>
          <Navigation />
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

//   )
