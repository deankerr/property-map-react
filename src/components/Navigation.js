import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

export default function Navigation() {
  return (
    <Container fluid>
      <Router>
        <Nav variant="tabs">
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

        <Switch>
          <Route path="/listing/:id"></Route>

          <Route path="/rent"></Route>

          <Route path="/buy"></Route>

          <Route path="/favourites"></Route>

          <Route exact path="/">
            <h4 className="text-center">Select an option above to begin!</h4>
          </Route>

          <Route path="*">
            <h4 className="text-center">Page not found</h4>
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}
