import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchForm from './SearchForm'

import { Router } from 'react-router-dom'

import { createMemoryHistory } from 'history'
const fakeHistory = createMemoryHistory()

it('renders generated price list', () => {
  render(<SearchForm listingType="Buy" />)
  expect(screen.getAllByRole('option', { name: '$1,000,000' })).toHaveLength(2)
})

it('pushes a search route with values from form', () => {
  render(
    <Router history={fakeHistory}>
      <SearchForm listingType="Rent" />
    </Router>
  )

  const suburb = screen.getByLabelText(/suburb/i)
  fireEvent.change(suburb, { target: { value: 'Manly' } })

  const state = screen.getByLabelText(/state*/i)
  fireEvent.change(state, { target: { value: 'NSW' } })

  const priceMin = screen.getByLabelText(/price \(min\)/i)
  const priceMinOpt = within(priceMin).getByText(/\$500/)
  userEvent.selectOptions(priceMin, priceMinOpt)

  const priceMax = screen.getByLabelText(/price \(max\)/i)
  const priceMaxOpt = within(priceMax).getByText(/\$1,000/)
  userEvent.selectOptions(priceMax, priceMaxOpt)

  const bedsMin = screen.getByLabelText(/bedrooms \(min\)/i)
  const bedsMinOpt = within(bedsMin).getByText(/2/)
  userEvent.selectOptions(bedsMin, bedsMinOpt)

  const bathsMin = screen.getByLabelText(/bathrooms \(min\)/i)
  const bathsMinOpt = within(bathsMin).getByText(/2/)
  userEvent.selectOptions(bathsMin, bathsMinOpt)

  userEvent.click(screen.getByRole('button', /search*/i))

  expect(fakeHistory.location.pathname).toBe('/rent/Manly/NSW/500/1000/2/2')
})
