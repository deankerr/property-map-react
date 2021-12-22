import { useState, useEffect } from 'react'

import axios from 'axios'

const DOMAIN_BASE_URL = 'https://api.domain.com.au/v1/listings/'
const SEARCH_METHOD = 'residential/_search'

function useSearchResults(formQuery, searchCache, saveSearchCache) {

  const [results, setResults] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    console.log('API formQuery', formQuery);
    if (formQuery.suburb) {
      setIsLoaded(false)

      if (formQuery === searchCache.formQuery) {
        console.log(`Using searchCache`, searchCache)
        setResults(searchCache.data)
        setIsLoaded(true)
      } else {

        axios.post(DOMAIN_BASE_URL + SEARCH_METHOD,
          {
            "listingType": "Rent",
            "locations": [
              {
                "state": formQuery.state,
                "suburb": formQuery.suburb,
              }
            ],
            "pageSize": 20
          },
          {
            headers: {
              'X-API-KEY': process.env.REACT_APP_DOMAIN_API_KEY
            }
          }
        )
          .then(res => {
            console.log('Domain Search Response:', res)
            setResults(res.data)
            saveSearchCache(
              {
                formQuery,
                data: res.data
              }
            )
            setIsLoaded(true)
          })
          .catch(err => {
            console.log('Domain Search ERROR:', err.message)
            setError(err)
          })
      }
    }
  }, [formQuery])

  return { results, isLoaded, error }
}


function useListingResult(id, listingCache, saveListingToCache) {
  const [result, setResults] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    setIsLoaded(false)

    const cacheSearch = listingCache.filter(listing => listing.id == id)

    if (cacheSearch.length > 0) {
      console.log(`Using listingCache for id: ${id}`, listingCache)
      setResults(cacheSearch[0])
      setIsLoaded(true)

    } else {
      axios.get(DOMAIN_BASE_URL + id, {
        params: {
          id,
          'api_key': process.env.REACT_APP_DOMAIN_API_KEY
        }
      })
        .then(res => {
          console.log('Domain Listing Response:', res)
          setResults(res.data)
          saveListingToCache(res.data)
          setIsLoaded(true)
        })
        .catch(err => {
          console.log('Domain Listing ERROR:', err.message)
          setError(err)
        })
    }
  }, [])

  return { result, isLoaded, error }
}


export { useSearchResults, useListingResult }
