export default function PropertyMapMarker (props) {

  const styleValue = {backgroundImage: `url(${props.image})`}


  return (
    <div className="propertyMapMarker" style={styleValue}>
      Prop {props.headline}
    </div>
  )
  
}
