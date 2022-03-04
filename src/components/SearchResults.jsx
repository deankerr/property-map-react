import { useParams } from 'react-router-dom'

import { getParamString } from '../utils/utils'
import { useDomainSearchResults } from '../hooks/useDomainSearchResults'

export default function SearchResults(props) {
  const { listingType, cache, setCache } = props

  const params = useParams()

  // Reconstitute query from params into an object, queryID preventing performing the same search on rerender
  const query = { ...params, listingType, queryKey: getParamString(params) }

  const { results, isLoaded, error } = useDomainSearchResults(query, cache, setCache)

  // TODO: Save independent rent/sale caches that restore when tab reactivated

  return (
    <>
      {error && <p>Error: {error.message}</p>}
      {isLoaded ? (
        <p>
          Found {results.length} results for {listingType}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
