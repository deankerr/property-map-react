import './Marker.css'
import { useState } from 'react'
import { ReactComponent as MapPin } from '../assets/map-pin.svg'
import MarkerPopup from './MarkerPopup'

export default function Marker(props) {
  const [showPopup, setShowPopup] = useState(false)

  function handleMouseOver() {
    setShowPopup(true)
  }

  function handleMouseOut() {
    setShowPopup(false)
  }

  function handleClick() {
    setShowPopup(!showPopup)
  }

  const { image, domainURL, headline, bedrooms, bathrooms, carSpaces } = props
  return (
    <div className="marker">
      <MapPin onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick} />
      <MarkerPopup
        visible={showPopup}
        mouseOverPopup={setShowPopup}
        image={image}
        domainURL={domainURL}
        headline={headline}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        carSpaces={carSpaces}
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
