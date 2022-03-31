import { Carousel, CarouselItem } from 'react-bootstrap'
import './MarkerPopup.css'

export default function MarkerPopup(props) {
  const { visible, mouseOver, mouseOut, media, headline, domainURL, bedrooms, bathrooms, carSpaces, price } = props

  function handleClick() {
    window.location = domainURL
  }

  return (
    <div
      className="popup"
      style={visible ? { display: 'block' } : { display: 'none' }}
      onClick={handleClick}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      <div className="arrow"></div>
      <div className="content">
        <h5>{headline}</h5>
        <Carousel interval="2000" controls={false} style={{ height: '180px' }}>
          {media.map((image) => (
            <CarouselItem className="h-180" style={{ height: '180px' }}>
              <img src={`${image.url}/500x500`} alt="" />
            </CarouselItem>
          ))}
        </Carousel>

        <ul className="list-inline fs-4 my-1">
          <li className="list-inline-item px-1">🛏 {bedrooms || 0}</li>
          <li className="list-inline-item px-1">🛁 {bathrooms || 0}</li>
          <li className="list-inline-item px-1">🚘 {carSpaces || 0}</li>
        </ul>
        <h5>{price}</h5>
      </div>
    </div>
  )
}
