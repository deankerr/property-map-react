import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Propertify title', () => {
  render(<App />)
  const textElement = screen.getByText(/Propertify/i)
  expect(textElement).toBeInTheDocument()
})

test('renders Navigation', () => {
  render(<App />)
  const textElement = screen.getByText(/Rent/i)
  expect(textElement).toBeInTheDocument()
})
