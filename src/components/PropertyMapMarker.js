import { Link } from 'react-router-dom'

export default function PropertyMapMarker (props) {

  const styleValue = {backgroundImage: `url(${props.image})`}

  return (
    <Link to={`/listing/${props.id}`}>
      <div className="propertyMapMarker" style={styleValue}>
      </div>
    </Link>
  )
  
}
