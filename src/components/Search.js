import { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import Map from './Map'

export default function Search(props) {
  const { searchCache, saveSearchCache, listingType } = props

  const DEFAULT_FORM_VALUES = {
    suburb: '',
    state: 'VIC',
    priceMin: '0',
    priceMax: '0',
    bedsMin: '0',
    bathsMin: '0',
    listingType,
  }

  const [searchForm, setSearchForm] = useState(DEFAULT_FORM_VALUES)

  function handleFormChange(ev) {
    setSearchForm({
      ...searchForm,
      [ev.target.name]: ev.target.value,
    })
  }

  const [formQuery, setFormQuery] = useState({})

  useEffect(() => {
    if (searchCache.formQuery && searchCache.formQuery.listingType === listingType) {
      console.log('setting query')
      setSearchForm(searchCache.formQuery)
      setFormQuery(searchCache.formQuery)
    } else {
      setSearchForm(DEFAULT_FORM_VALUES)
      setFormQuery({})
    }
  }, [])

  function handleSubmit(ev) {
    setFormQuery(searchForm)
    console.log('submit', searchForm)
    ev.preventDefault()
  }

  // Generate Price select options
  let priceOptions = []
  if (listingType === 'Rent') {
    for (let i = 100; i <= 2000; i = i + 100)
      priceOptions.push(
        <option value={i} key={i}>
          {'$' + i.toLocaleString('en-US')}
        </option>
      )
    for (let i = 3000; i <= 5000; i = i + 1000)
      priceOptions.push(
        <option value={i} key={i}>
          {'$' + i.toLocaleString('en-US')}
        </option>
      )
  } else {
    for (let i = 50000; i <= 1000000; i = i + 50000)
      priceOptions.push(
        <option value={i} key={i}>
          {'$' + i.toLocaleString('en-US')}
        </option>
      )
    for (let i = 1500000; i <= 5000000; i = i + 500000)
      priceOptions.push(
        <option value={i} key={i}>
          {'$' + i.toLocaleString('en-US')}
        </option>
      )
  }

  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    if (searchCache.data && searchCache.data.length === 0) setNoResults(true)
    else setNoResults(false)
  }, [searchCache])

  return (
    <Container fluid>
      <Row>
        <Col lg={3} className="text-center">
          <h4>Search Properties For {listingType}</h4>

          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="justify-content-center justify-content-lg-end mb-3">
              <Col xs={6} lg={'auto'} xl={8} className="ps-2 pe-1">
                <Form.Control
                  type="text"
                  name="suburb"
                  placeholder="Suburb"
                  onChange={handleFormChange}
                  value={searchForm.suburb}
                />
              </Col>
              <Col xs={4} lg={'auto'} xl={4} className="ps-1">
                <Form.Select name="state" value={searchForm.state} onChange={handleFormChange}>
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
              <Form.Label column xs={4} lg={6}>
                Price (min)
              </Form.Label>
              <Col xs={4} lg={6}>
                <Form.Select name="priceMin" value={searchForm.priceMin} onChange={handleFormChange}>
                  <option value="0">Any</option>
                  {priceOptions.map((option) => option)}
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="justify-content-center align-items-center mb-3">
              <Form.Label column xs={4} lg={6}>
                Price (max)
              </Form.Label>
              <Col xs={4} lg={6}>
                <Form.Select name="priceMax" value={searchForm.priceMax} onChange={handleFormChange}>
                  <option value="0">Any</option>
                  {priceOptions.map((option) => option)}
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="justify-content-center align-items-center mb-1">
              <Form.Label column xs={4} lg={6}>
                Bedrooms (min)
              </Form.Label>
              <Col xs={4} lg={6}>
                <Form.Select name="bedsMin" value={searchForm.bedsMin} onChange={handleFormChange}>
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
              <Form.Label column xs={4} lg={6}>
                Bathrooms (min)
              </Form.Label>
              <Col xs={4} lg={6}>
                <Form.Select name="bathsMin" value={searchForm.bathsMin} onChange={handleFormChange}>
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

          {noResults && <Alert variant="danger">No results found!</Alert>}
        </Col>

        <Col lg={9} className="px-0">
          <Map
            searchCache={searchCache}
            saveSearchCache={saveSearchCache}
            formQuery={formQuery}
            listingType={listingType}
          />
        </Col>
      </Row>
    </Container>
  )
}
