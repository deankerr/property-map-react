import GoogleMapReact from 'google-map-react'
import { useState, useEffect } from 'react/cjs/react.development'

import { useSearchResults } from '../hooks/domainAPI'
import PropertyMapMarker from './PropertyMapMarker'

// Google Maps
const DEFAULT_CENTER = { lat: -37.767228, lng: 144.962176 }
const DEFAULT_ZOOM = 16

export default function Map(props) {

  const { searchCache, saveSearchCache, formQuery, listingType } = props

  const { results, isLoaded, clearResults } = useSearchResults(formQuery, searchCache, saveSearchCache)


  const [center, setCenter] = useState(DEFAULT_CENTER)
  useEffect(() => {
    // Find a rough "centre point" of the results by averaging the lat/lngs, so we can zoom the map there
    if (isLoaded && results.length > 0) {
      let lat = 0, lng = 0
      results.forEach(res => {
        lat += res.listing.propertyDetails.latitude
        lng += res.listing.propertyDetails.longitude
      })
      lat = lat / results.length
      lng = lng / results.length
      setCenter({ lat, lng })
      console.log('new centre', center);

    }
  }, [isLoaded])

  
  // Erase results if we just changed from rent <-> buy
  useEffect( () => {
    clearResults()
  }, [listingType])

  return (
    <>
      <div className="googleMap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          center={center}
          zoom={DEFAULT_ZOOM}
        >
          {
            isLoaded && results.map(res =>
              <PropertyMapMarker
                lat={res.listing.propertyDetails.latitude}
                lng={res.listing.propertyDetails.longitude}
                headline={res.listing.headline}
                image={res.listing.media[0].url}
                id={res.listing.id}
                key={res.listing.id}
              />
            )
          }

        </GoogleMapReact>
      </div>

      {/* {
        isLoaded
          ?
          <div>
            <p>Search Results</p>
            {
              results.map(r => {
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
      } */}
    </>
  )

}
