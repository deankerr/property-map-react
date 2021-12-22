import './Listing.css'
import { useParams } from 'react-router-dom'

import { useListingResult } from '../hooks/domainAPI'

export default function Listing(props) {
  const params = useParams()
  const { listingCache, saveListingToCache } = props


  const { result, isLoaded, error } = useListingResult(params.id, listingCache, saveListingToCache)

  const { addressParts, description, media, seoUrl, propertyTypes, bathrooms, bedrooms, carspaces,
    headline, priceDetails } = result

  return (
    <div>
      {
        isLoaded
          ?
          <div>

            <div className="listingTopContainer">

              <div className="listingMedia">
                <img src={media[0].url} />
              </div>

              <div className="listingInfo">
                <h3>{addressParts.displayAddress}</h3>
                <a href={seoUrl}>View on Domain</a>
                <p>{propertyTypes[0]} &mdash; {priceDetails.displayPrice}</p>
                <ul className='bedBathAndCar'>
                  <li>🛏 {bedrooms}</li>
                  <li>🛁 {bathrooms}</li>
                  <li>🚘 {carspaces}</li>
                </ul>
                <div className="description">
                  <h3>{headline}</h3>
                  <p>{description}</p>
                </div>
              </div>


            </div>
          </div>
          :
          <p>Loading</p>
      }
    </div>
  )
}
