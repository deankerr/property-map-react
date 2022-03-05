import './Marker.css'

export default function Marker(props) {
  const { image, domURL } = props

  return (
    <a href={domURL}>
      <div>
        <div className="marker">
          <div className="markerPointer shadow-sm"></div>
          <div className="markerImageBox shadow-sm">
            <img src={`${image}/300x200`} alt="listing marker" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </a>
  )
}
