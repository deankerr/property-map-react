import { render, screen } from '@testing-library/react'
// import TestUtils from 'react-dom'
import Map from './Map'

// ? Unable to test if the GoogleMapReact component loads without executing external scripts "dangerously"
// it('renders GoogleMapReact component', () => {
//   render(<Map />)
//   const mapComponent = screen.getByRole('map')
// })

it('renders marker props in the map div', () => {
  function TestMarker(props) {
    return <div>{props.num}</div>
  }

  const testMarkers = [
    <TestMarker num="one" key="one" />,
    <TestMarker num="two" key="two" />,
    <TestMarker num="three" key="three" />,
  ]

  render(<Map listings={testMarkers} />)
  const searchMarker = screen.getByText(/two/)
  expect(searchMarker).toBeInTheDocument()
})
