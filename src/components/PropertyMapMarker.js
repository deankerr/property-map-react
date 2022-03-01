import { Link } from 'react-router-dom'

export default function PropertyMapMarker(props) {
  return (
    <Link to={`/listing/${props.id}`}>
      <div className="propertyMapMarker">
        <img src={`${props.image}/300x200`} alt="" />
      </div>
    </Link>
  )
}
