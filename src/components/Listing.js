import './Listing.css'
import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'


import { useListingResult } from '../hooks/domainAPI'
import { useFavourites } from '../hooks/useFavourites'
import { useEffect } from 'react/cjs/react.development'

export default function Listing(props) {
  const params = useParams()
  const { listingCache, saveListingToCache, searchCache } = props
  const history = useHistory()

  const { result, isLoaded } = useListingResult(params.id, listingCache, saveListingToCache)

  const { addressParts, description, media, seoUrl, propertyTypes, bathrooms, bedrooms, carspaces,
    headline, priceDetails } = result


  const [mediaIndex, setMediaIndex] = useState(0)

  function handleLeftButtonClick() {
    let newIndex = mediaIndex - 1
    if (newIndex < 0) newIndex = media.length - 1
    setMediaIndex(newIndex)
  }

  function handleRightButtonClick() {
    let newIndex = mediaIndex + 1
    if (newIndex === media.length) newIndex = 0
    setMediaIndex(newIndex)
  }

  const { faves, addFave, removeFave } = useFavourites()
  let faveButton
  if (faves.filter(listing => listing.id == params.id).length > 0) {
    faveButton = (
      <div className="faveButton" onClick={() => removeFave(result)}>
        ❤️ Remove from favourites
      </div>
    )
  } else {
    faveButton = (
      <div className="faveButton" onClick={() => addFave(result)}>
        ❤️ Add to favourites
      </div>
    )
  }

  return (
    <div>
      {
        isLoaded
          ?
          <div>

            <div className="backBar">
              {
                searchCache.data && (
                  <div className="backButton" onClick={history.goBack}>
                    &lt; Back to map
                  </div>
                )
              }

              <div></div>

              {faveButton}

            </div>
            <div className="listingTopContainer">

              <div className="listingMedia">
                <div className="mediaContainer">
                  <div className="mediaScrollButton" onClick={handleLeftButtonClick}>
                    &lt;
                  </div>
                  <div className="media">
                    <img src={media[mediaIndex].url} />
                  </div>
                  <div className="mediaScrollButton" onClick={handleRightButtonClick}>
                    &gt;
                  </div>
                </div>
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
