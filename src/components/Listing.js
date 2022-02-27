import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import { useListingResult } from '../hooks/domainAPI'
import { useFavourites } from '../hooks/useFavourites'

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
      <Button onClick={() => addFave(result)}>❤️ Add to favourites</Button>
    )
  }

  return (

    <Container fluid>
      <br />
      {
        isLoaded
          ?
          <>
            {/* Back and Fave buttons - TODO: move into image/desc cols for better layout */}
            <Row className="mb-3">
              <Col>{searchCache.data && (<Button variant="primary" onClick={history.goBack}>&lt; Back to map</Button>)}</Col>
              <Col className="text-end">{faveButton}</Col>
            </Row>


            <Row className="text-center">
              {/* Image and controls */}
              <Col xl={7}>
                <Row className="align-items-center">
                  <Col xs={1} className="px-0"><Button variant="outline-secondary" onClick={handleLeftButtonClick}>&lt;</Button></Col>
                  <Col className="px-0">
                    <Image fluid src={media[mediaIndex].url} />
                  </Col>
                  <Col xs={1} className="px-0"><Button variant="outline-secondary" onClick={handleRightButtonClick}>&gt;</Button></Col>
                </Row>
              </Col>


              {/* Description */}
              <Col xl={5}>
                <h3>{addressParts.displayAddress}</h3>
                <a href={seoUrl}>View on Domain</a>
                <p>{propertyTypes[0]} &mdash; {priceDetails.displayPrice}</p>
                <ul className="list-inline fs-4">
                  <li className="list-inline-item px-1">🛏 {bedrooms}</li>
                  <li className="list-inline-item px-1">🛁 {bathrooms}</li>
                  <li className="list-inline-item px-1">🚘 {carspaces}</li>
                </ul>
                  <h3>{headline}</h3>
                  <p className="text-start">{description}</p>
              </Col>
            </Row>
          </>
          :
          <p className="text-center">Loading</p>
      }
    </Container>



  )
}
