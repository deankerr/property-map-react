import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

// * test data
const DEFAULT_FORM = {
  suburb: 'Brunswick',
  state: 'VIC',
}

export default function SearchForm(props) {
  const { listingType } = props

  const [searchForm, setSearchForm] = useState(DEFAULT_FORM)

  function handleFormChange(ev) {
    setSearchForm({
      ...searchForm,
      [ev.target.name]: ev.target.value,
    })
    console.log(searchForm)
  }

  // TODO: Handle submit
  function handleSubmit() {
    console.log('Form submit')
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xxl={10} className="text-center justify-content-center">
          <h4>Search Properties For {listingType}</h4>
          {/* // TODO: Replace suburb/state inputs with searchable component */}
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="justify-content-center justify-content-lg-end mb-3">
              <Col xs={6} lg={12} xl={8} className="mb-lg-2">
                <Form.Label htmlFor="suburb" visuallyHidden />
                <Form.Control
                  type="text"
                  name="suburb"
                  placeholder="Suburb"
                  id="suburb"
                  onChange={handleFormChange}
                  value={searchForm.suburb}
                />
              </Col>
              <Col xs={4} lg="auto" xl={4}>
                <Form.Label htmlFor="state-territory" visuallyHidden />
                <Form.Select name="state" value={searchForm.state} id="state-territory" onChange={handleFormChange}>
                  <option value="ACT">ACT</option>
                  <option value="NSW">NSW</option>
                  <option value="NT">NT</option>
                  <option value="QLD">QLD</option>
                  <option value="SA">SA</option>
                  <option value="TAS">TAS</option>
                  <option value="VIC">VIC</option>
                  <option value="WA">WA</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="justify-content-center align-items-center mb-1">
              <Form.Label column xs={4} lg={6} htmlFor="price-min">
                Price (min)
              </Form.Label>
              <Col xs={4} lg={6}>
                <Form.Select name="priceMin" value={searchForm.priceMin} id="price-min" onChange={handleFormChange}>
                  {generatePriceOptions(listingType).map((price) => price)}
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="justify-content-center align-items-center mb-3">
              <Form.Label column xs={4} lg={6} htmlFor="price-max">
                Price (max)
              </Form.Label>
              <Col xs={4} lg={6}>
                <Form.Select name="priceMax" value={searchForm.priceMax} id="price-max" onChange={handleFormChange}>
                  {generatePriceOptions(listingType).map((price) => price)}
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="justify-content-center align-items-center mb-1">
              <Form.Label column xs={4} lg={6} htmlFor="bedrooms-min">
                Bedrooms (min)
              </Form.Label>
              <Col xs={4} lg={6}>
                <Form.Select name="bedsMin" value={searchForm.bedsMin} id="bedrooms-min" onChange={handleFormChange}>
                  <option value="0">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="justify-content-center align-items-center mb-3">
              <Form.Label column xs={4} lg={6} htmlFor="bathrooms-min">
                Bathrooms (min)
              </Form.Label>
              <Col xs={4} lg={6}>
                <Form.Select name="bathsMin" value={searchForm.bathsMin} id="bathrooms-min" onChange={handleFormChange}>
                  <option value="0">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Row className="justify-content-center mb-3">
              <Col xs={4}>
                <Button variant="primary" type="submit">
                  Search!
                </Button>
              </Col>
            </Row>
          </Form>
          {/* // TODO: Alerts */}
          {/* {noResults && <Alert variant="danger">No results found!</Alert>} */}
        </Col>
      </Row>
    </Container>
  )
}

// .toLocalString('en-US') formats values with a comma
function generatePriceOptions(listingType) {
  function formatPrice(price) {
    return (
      <option value={price} key={price}>
        {'$' + price.toLocaleString('en-US')}
      </option>
    )
  }

  let options = [
    <option value="0" key="any">
      Any
    </option>,
  ]

  switch (listingType) {
    case 'Buy':
      for (let i = 50000; i <= 1000000; i = i + 50000) options.push(formatPrice(i))
      for (let i = 1500000; i <= 5000000; i = i + 500000) options.push(formatPrice(i))
      break

    default:
    case 'Rent':
      for (let i = 100; i <= 2000; i = i + 100) options.push(formatPrice(i))
      for (let i = 3000; i <= 5000; i = i + 1000) options.push(formatPrice(i))
      break
  }

  return options
}
