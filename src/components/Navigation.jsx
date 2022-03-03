import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

export default function Navigation() {
  return (
    <Container fluid>
      <Nav variant="tabs mb-3">
        <Nav.Item>
          <LinkContainer to="/rent">
            <Nav.Link>Rent</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/buy">
            <Nav.Link>Buy</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/favourites">
            <Nav.Link>Favourites</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </Container>
  )
}
