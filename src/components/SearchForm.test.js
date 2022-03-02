import { render, screen, fireEvent } from '@testing-library/react'

import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import SearchForm from './SearchForm'

it('renders generated price list', () => {
  render(<SearchForm listingType="Buy" />)
  expect(screen.getAllByRole('option', { name: '$1,000,000' })).toHaveLength(2)
})
