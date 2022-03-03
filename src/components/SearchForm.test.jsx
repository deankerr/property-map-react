import { render, screen } from '@testing-library/react'

import SearchForm from './SearchForm'

it('renders generated price list', () => {
  render(<SearchForm listingType="Buy" />)
  expect(screen.getAllByRole('option', { name: '$1,000,000' })).toHaveLength(2)
})
