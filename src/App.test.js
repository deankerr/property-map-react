import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Propertify title', () => {
  render(<App />)
  const linkElement = screen.getByText(/Propertify/i)
  expect(linkElement).toBeInTheDocument()
})
