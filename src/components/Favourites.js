import './Favourites.css'
import { Link } from 'react-router-dom'
import { useFavourites } from '../hooks/useFavourites'

export default function Favourites(props) {
  const { faves, removeFave } = useFavourites()
  return (
    <div>
      <h3>Favourites</h3>

      {
        faves
          ?
          faves.map(fave => {
            return (
              <Link to={`/listing/${fave.id}`}>
                <div className="faveItem">
                  <img src={fave.media[0].url} className="faveImg" />
                  {fave.headline}
                </div>
              </Link>
            )
          })

          :
          <p>Add some favourites first!</p>
      }

    </div>

  )
}
