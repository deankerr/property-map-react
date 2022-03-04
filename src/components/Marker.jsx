const markerWidth = '100'

const imageBoxHeight = 67
const imageBoxMargin = 4
const imageBoxBorderRadius = '10%'
const imageBoxBorderColor = '#333'
const imageBoxBorderSize = '3px'

const pointerHalfWidth = '45px'
const pointerHeight = 20
const pointerColor = imageBoxBorderColor

const offsetX = -markerWidth / 2
const offsetY = -(imageBoxHeight + imageBoxMargin + pointerHeight)

export default function Marker(props) {
  const { image } = props

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: `${markerWidth}px`,
          boxSizing: 'border-box',
          position: 'relative',
          top: `${offsetY}px`,
          left: `${offsetX}px`,
        }}
      >
        <div
          style={{
            border: `${imageBoxBorderColor} solid ${imageBoxBorderSize}`,
            width: '100%',
            height: `${imageBoxHeight}px`,
            borderRadius: `${imageBoxBorderRadius}`,
            overflow: 'hidden',
            marginBottom: `${imageBoxMargin}px`,
            boxSizing: 'border-box',
          }}
        >
          <img src={`${image}/300x200`} alt="Listing marker" style={{ width: '100%', height: '100%' }} />
        </div>
        <div
          style={{
            width: '0',
            height: '0',
            borderLeft: `${pointerHalfWidth} solid transparent`,
            borderRight: `${pointerHalfWidth} solid transparent`,
            borderTop: `${pointerHeight}px solid ${pointerColor}`,
          }}
        ></div>
      </div>
    </div>
  )
}
