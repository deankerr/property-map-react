// import './Favourites.css'
import { useHistory, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import { useFavourites } from '../hooks/useFavourites'

export default function Favourites(props) {
  const { faves, removeFave } = useFavourites()

  const history = useHistory()
  function handleCardClick(id) {
    history.push(`/listing/${id}`)
  }


  return (
    <Container className="text-center justify-content-center">
      <h3>Favourites</h3>
      {
        faves.length
          ?
          <Row className="g-4 justify-content-center">
            {
              faves.map(fave => (
                  <Card style={{ width: '18rem' }} className="faveCard mx-3 position-relative px-0">
                    <Card.Img variant="top" src={fave.media[0].url} onClick={() => handleCardClick(fave.id)} />
                    <Card.Body onClick={() => handleCardClick(fave.id)}>
                      <Card.Text>{fave.headline}</Card.Text>
                      <Button variant="outline-danger" className="mx-1 my-1 position-absolute top-0 end-0 fs-4" onClick={() => removeFave(fave)}>💔</Button>
                    </Card.Body>
                  </Card>
              ))
            }
          </Row>
          :
          <p>Add some favourites first!</p>
      }

    </Container>

  )
}
