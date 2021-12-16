import './App.css'

import GoogleMapReact from 'google-map-react'

import {useDomainSearchResults} from './hooks/domainAPI'

// Google Maps
const DEFAULT_CENTER = { lat: -37.767228, lng: 144.962176 }
const DEFAULT_ZOOM = 14


function App() {

  const { results, isLoaded } = useDomainSearchResults()


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
