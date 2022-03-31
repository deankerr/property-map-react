import './Marker.css'
import { useState, useRef } from 'react'
import { ReactComponent as MapPin } from '../assets/map-pin.svg'
import MarkerPopup from './MarkerPopup'

export default function Marker(props) {
  const [showPopup, setShowPopup] = useState(false)
  const showLocked = useRef(false)

  function handleMouseOver() {
    setShowPopup(true)
  }

  function handleMouseOut() {
    if (showLocked.current) return
    setShowPopup(false)
  }

  function handleClick() {
    setShowPopup(!showLocked.current)
    showLocked.current = !showLocked.current
  }

  const { media, domainURL, headline, bedrooms, bathrooms, carSpaces, price } = props
  return (
    <div className="marker">
      <MapPin onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick} />
      <MarkerPopup
        visible={showPopup}
        mouseOver={handleMouseOver}
        mouseOut={handleMouseOut}
        media={media}
        domainURL={domainURL}
        headline={headline}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        carSpaces={carSpaces}
        price={price}
      />
    </div>
  )
}

// <a href={domURL}>
//   <div>
//     <div className="marker">
//       <div className="pointerContainer shadow"></div>
//       <div className="pointerContent"></div>
//       <div className="boxContainer shadow"></div>
//       <div className="boxContent">
//         <img src={`${image}/300x200`} alt="listing marker" style={{ width: '100%' }} />
//       </div>
//     </div>
//   </div>
// </a>
