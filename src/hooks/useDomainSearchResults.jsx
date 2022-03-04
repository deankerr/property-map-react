import { useState, useEffect } from 'react'

import axios from 'axios'

const DOMAIN_URL = 'https://api.domain.com.au/v1/listings/residential/_search'

function useDomainSearchResults(query, cache, setCache) {
  const [results, setResults] = useState(cache)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  const { queryKey, listingType, suburb, state, bedsMin, bathsMin, priceMin, priceMax } = query

  useEffect(() => {
    setIsLoaded(false)

    if (cache.queryKey === queryKey) {
      setIsLoaded(true)
      console.log('Using cache', cache)
      return
    }

    let domainQuery = {
      listingType: listingType,
      listingAttributes: ['HasPhotos'],
      locations: [
        {
          state: state,
          suburb: suburb,
        },
      ],
      minBedrooms: parseInt(bedsMin),
      minBathrooms: parseInt(bathsMin),
      minPrice: parseInt(priceMin),
      // maxPrice of 0 will sadly match nothing
      maxPrice: parseInt(priceMax) === 0 ? '' : parseInt(priceMax),
      pageSize: 20,
    }

    console.log('Domain query:', domainQuery)
    axios
      .post(DOMAIN_URL, domainQuery, {
        headers: {
          'X-API-KEY': process.env.REACT_APP_DOMAIN_API_KEY,
        },
      })
      .then((response) => {
        console.log('Domain search response:', response)

        // TODO: support "Project" listings
        const listings = response.data.filter((res) => res.type === 'PropertyListing')
        const results = { queryKey, listings }
        setResults(results)
        setIsLoaded(true)
      })
      .catch((err) => {
        console.log('ERROR on fetch', err)
        setError(err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.queryKey])

  return { results, isLoaded, error }
  // return results
}

export { useDomainSearchResults }
