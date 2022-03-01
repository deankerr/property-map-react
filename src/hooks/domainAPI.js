import { useState, useEffect } from 'react'

import axios from 'axios'

const DOMAIN_BASE_URL = 'https://api.domain.com.au/v1/listings/'
const SEARCH_METHOD = 'residential/_search'

function useSearchResults(formQuery, searchCache, saveSearchCache) {
  const [results, setResults] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  function clearResults() {
    setResults([])
    setIsLoaded(false)
    setError(null)
  }

  useEffect(() => {
    console.log('api')
    if (formQuery.suburb) {
      setIsLoaded(false)

      if (formQuery === searchCache.formQuery) {
        console.log(`Using searchCache`, searchCache)
        setResults(searchCache.data)
        setIsLoaded(true)
      } else {
        const query = {
          listingType: formQuery.listingType,
          listingAttributes: ['HasPhotos'],
          locations: [
            {
              state: formQuery.state,
              suburb: formQuery.suburb,
            },
          ],
          minBedrooms: parseInt(formQuery.bedsMin),
          minBathrooms: parseInt(formQuery.bathsMin),
          minPrice: parseInt(formQuery.priceMin),
          pageSize: 20,
        }

        const max = parseInt(formQuery.priceMax)
        if (max > 0) query['maxPrice'] = max

        console.log('Query:', query)

        axios
          .post(DOMAIN_BASE_URL + SEARCH_METHOD, query, {
            headers: {
              'X-API-KEY': process.env.REACT_APP_DOMAIN_API_KEY,
            },
          })
          .then((res) => {
            res.data = res.data.filter((res) => res.type === 'PropertyListing') // TODO: support "Project" listings
            console.log('Domain Search Response:', res)
            setResults(res.data)
            saveSearchCache({
              formQuery,
              data: res.data,
            })
            setIsLoaded(true)
          })
          .catch((err) => {
            console.log('Domain Search ERROR:', err.message)
            setError(err)
          })
      }
    }
  }, [formQuery])

  return { results, isLoaded, error, clearResults }
}

function useListingResult(id, listingCache, saveListingToCache) {
  const [result, setResults] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoaded(false)

    const cacheSearch = listingCache.filter((listing) => listing.id == id)

    if (cacheSearch.length > 0) {
      console.log(`Using listingCache for id: ${id}`, listingCache)
      setResults(cacheSearch[0])
      setIsLoaded(true)
    } else {
      axios
        .get(DOMAIN_BASE_URL + id, {
          params: {
            id,
            api_key: process.env.REACT_APP_DOMAIN_API_KEY,
          },
        })
        .then((res) => {
          console.log('Domain Listing Response:', res)

          // Format description line breaks
          let newDesc = res.data.description.replace(/(?:\r\n|\r|\n)/g, '%%PROPERTIFY-LINE-BREAK%%')
          res.data.description = newDesc.split('%%PROPERTIFY-LINE-BREAK%%')

          setResults(res.data)
          saveListingToCache(res.data)
          setIsLoaded(true)
        })
        .catch((err) => {
          console.log('Domain Listing ERROR:', err.message)
          setError(err)
        })
    }
  }, [])

  return { result, isLoaded, error }
}

export { useSearchResults, useListingResult }
