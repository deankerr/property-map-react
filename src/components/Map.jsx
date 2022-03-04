import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'

import Marker from './Marker'

const DEFAULT_CENTER = { lat: -37.8136, lng: 144.9631 }
const DEFAULT_ZOOM = 13

export default function Map(props) {
  const { listings = [] } = props

  // TODO: Investigate fitBounds to zoom/center displayed markers https://github.com/google-map-react/google-map-react/blob/master/API.md
  const [center, setCenter] = useState(DEFAULT_CENTER)
  const [zoom, setZoom] = useState(DEFAULT_ZOOM)
  useEffect(() => {
    // Find a rough "centre point" of the results by averaging the lat/lngs, so we can zoom the map there
    if (listings.length > 0) {
      let lat = 0,
        lng = 0
      listings.forEach((listing) => {
        lat += listing.listing.propertyDetails.latitude
        lng += listing.listing.propertyDetails.longitude
      })
      lat = lat / listings.length
      lng = lng / listings.length
      setCenter({ lat, lng })
      setZoom(15)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listings.length])

  // ! testing - one listing only
  // if (listings.length > 0) listings = [listings[0]]

  return (
    <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} center={center} zoom={zoom}>
      {listings.map((listing) => (
        <Marker
          lat={listing.listing.propertyDetails.latitude}
          lng={listing.listing.propertyDetails.longitude}
          headline={listing.listing.headline}
          image={listing.listing.media[0].url}
          id={listing.listing.id}
          key={listing.listing.id}
        />
      ))}
    </GoogleMapReact>
  )
}
