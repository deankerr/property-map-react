import './App.css'
import { useState, useEffect } from 'react'

import GoogleMapReact from 'google-map-react'
import axios from 'axios'

// Google Map
const DEFAULT_CENTER = { lat: -37.767228, lng: 144.962176 }
const DEFAULT_ZOOM = 14

// Domain
const DOMAIN_SEARCH_BASE_URL = 'https://api.domain.com.au/v1/listings/residential/_search'

function App() {

  const [results, setResults] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {

    if (!isLoaded && !error) {

      axios.post(DOMAIN_SEARCH_BASE_URL,
        {
          "listingType": "Rent",
          "locations": [
            {
              "state": "VIC",
              "suburb": "brunswick",
            }
          ],
        },
        {
          headers: {
            'X-API-KEY': process.env.REACT_APP_DOMAIN_API_KEY
          }
        }
      )
        .then(res => {
          console.log('Domain Search Response:', res)
          setResults(res)
          setIsLoaded(true)
        })
        .catch(err => {
          console.log('Domain Search ERROR:', err.message)
          setError(err)
        })
    }

  })


  return (

    <div className="App">
      <h1>Property Map React</h1>

      <div className="googleMap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          center={DEFAULT_CENTER}
          zoom={DEFAULT_ZOOM}
        >

        </GoogleMapReact>
      </div>
    </div>

  )


}

export default App;
