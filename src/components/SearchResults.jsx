import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getParamString } from '../utils/utils'
import { useDomainSearchResults } from '../hooks/useDomainSearchResults'

export default function SearchResults(props) {
  const { listingType, cache, setCache } = props

  const params = useParams()

  // Reconstitute query from params into an object, queryID preventing performing the same search on rerender
  const query = { ...params, listingType, queryKey: getParamString(params) }

  const { results, isLoaded, error } = useDomainSearchResults(query, cache, setCache)

  isLoaded && setCache(results)

  // TODO: Save independent rent/sale caches that restore when tab reactivated
  // Save results cache on dismount
  useEffect(() => {
    return () => {
      console.log('Saving cache')
      // setCache(results)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
