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
  }, [listings.length]) // ! BUG: not an accurate method to know when markers changed

  let markers = listings.map((listing) => (
    <Marker
      lat={listing.listing.propertyDetails.latitude}
      lng={listing.listing.propertyDetails.longitude}
      headline={listing.listing.headline}
      media={listing.listing.media}
      id={listing.listing.id}
      domainURL={`https://domain.com.au/${listing.listing.listingSlug}`}
      bedrooms={listing.listing.propertyDetails.bedrooms}
      bathrooms={listing.listing.propertyDetails.bathrooms}
      carSpaces={listing.listing.propertyDetails.carspaces}
      price={listing.listing.priceDetails.displayPrice}
      key={listing.listing.id}
    />
  ))

  // ! testing - one marker only
  // markers = markers[0]

  return (
    <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} center={center} zoom={zoom}>
      {markers}
    </GoogleMapReact>
  )
}
