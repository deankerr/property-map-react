import { render, screen, fireEvent } from '@testing-library/react'

import App from './App'

it('renders Propertify title', () => {
  render(<App />)
  const textElement = screen.getByText(/Propertify/i)
  expect(textElement).toBeInTheDocument()
})

it('renders Navigation', () => {
  render(<App />)
  const textElement = screen.getByText(/Rent/i)
  expect(textElement).toBeInTheDocument()
})

it('renders SearchForm', () => {
  render(<App />)
  const rentTab = screen.getByText('Rent')
  // console.log(rentTab)
  fireEvent.click(rentTab)
  const formElement = screen.getByRole('textbox')
  expect(formElement).toBeInTheDocument()
})
