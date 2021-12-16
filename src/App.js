import './App.css'
import { useEffect } from 'react'

import GoogleMapReact from 'google-map-react'

import { useDomainSearchResults } from './hooks/domainAPI'
import PropertyMapMarker from './components/PropertyMapMarker'

// Google Maps
const DEFAULT_CENTER = { lat: -37.767228, lng: 144.962176 }
const DEFAULT_ZOOM = 14


function App() {

  const { results, isLoaded } = useDomainSearchResults()

  // const [markers, setMarkers] = useState([])

  // useEffect(() => {

  // }, [results])

  // let markers = []
  // if (isLoaded) {
  //   results.data.forEach(res => {
  //     markers.push(
  //       <PropertyMapMarker
  //         lat={res.listing.latitude}
  //         lng={res.listing.longitude}
  //         headline={res.listing.headline}
  //       />
  //     )
  //   })
  // }
  
  return (

    <div className="App">
      <h1>Property Map React</h1>

      <div className="googleMap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          center={DEFAULT_CENTER}
          zoom={DEFAULT_ZOOM}
        >

          {/* {markers.map(m => m)} */}

          {
            isLoaded && results.data.map(res => {
              console.log(res.listing)
              return (
                <PropertyMapMarker
                  lat={res.listing.propertyDetails.latitude}
                  lng={res.listing.propertyDetails.longitude}
                  headline={res.listing.headline}
                  image={res.listing.media[0].url}
                />
              )
            })

          }

        </GoogleMapReact>
      </div>

      {
        isLoaded
          ?
          <div>
            <p>Search Results</p>
            {
              results.data.map(r => {
                return (
                  <div key={r.listing.id}>
                    <h3>{r.listing.headline}</h3>
                    <div>
                      {
                        r.listing.media.map(m => {
                          if (m.category === 'Image') return <img style={{ display: 'inline', width: '100px', height: '100px' }} src={m.url} key={m.url} />
                        })
                      }
                    </div>
                  </div>)
              })
            }
          </div>
          :
          <p>Loading</p>
      }

    </div>

  )


}

export default App;
