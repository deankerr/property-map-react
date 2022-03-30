import './MarkerPopup.css'

export default function MarkerPopup(props) {
  const { visible, mouseOverPopup, image, headline, domainURL, bedrooms, bathrooms, carSpaces } = props

  function handleClick() {
    window.location = domainURL
  }

  return (
    <div
      className="popup"
      style={visible ? { display: 'block' } : { display: 'none' }}
      onClick={handleClick}
      onMouseOver={() => mouseOverPopup(true)}
      onMouseOut={() => mouseOverPopup(false)}
    >
      <div className="arrow"></div>
      <div className="content">
        <h5>{headline}</h5>
        <img src={`${image}/500x500`} alt="listing marker" />
        <ul className="list-inline fs-4 my-0">
          <li className="list-inline-item px-1">🛏 {bedrooms || 0}</li>
          <li className="list-inline-item px-1">🛁 {bathrooms || 0}</li>
          <li className="list-inline-item px-1">🚘 {carSpaces || 0}</li>
        </ul>
      </div>
    </div>
  )
}
