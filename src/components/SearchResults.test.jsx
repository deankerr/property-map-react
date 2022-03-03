import { render, screen } from '@testing-library/react'
import SearchResults from './SearchResults'

import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const fakeHistory = createMemoryHistory({ initialEntries: ['/buy/Geraldton/WA/0/800000/3/0'] })

let fakeCacheState = null
const fakeCache = jest.fn(() => fakeCacheState)
const fakeSetCache = jest.fn((data) => (fakeCacheState = data))

// ! This will need to be updated very soon
jest.mock('../hooks/useDomainSearchResults', () => {
  return {
    useDomainSearchResults: (query) => {
      return { results: ['small house', 'big house', 'shoebox'], isLoaded: true, error: null }
    },
  }
})

it('shows results message on the page', () => {
  render(
    <Router history={fakeHistory}>
      <Route path="/buy/:suburb/:state/:priceMin/:priceMax/:bedsMin/:bathsMin">
        <SearchResults listingType="sale" cache={fakeCache} setCache={fakeSetCache} />
      </Route>
    </Router>
  )

  expect(screen.getByText(/Found 3 results for sale/)).toBeInTheDocument()
})
