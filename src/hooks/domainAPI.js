import { useState, useEffect } from 'react'

import axios from 'axios'

const DOMAIN_SEARCH_BASE_URL = 'https://api.domain.com.au/v1/listings/residential/_search'

function useDomainSearchResults() {

  const [results, setResults] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {

    if (!isLoaded) {

      axios.post(DOMAIN_SEARCH_BASE_URL,
        {
          "listingType": "Rent",
          "locations": [
            {
              "state": "VIC",
              "suburb": "brunswick",
            }
          ],
          "pageSize": 10
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
          setIsLoaded(true)
        })
        .catch(err => {
          console.log('Domain Search ERROR:', err.message)
          setError(err)
        })
      
    }

  }, [])

  return { results, isLoaded, error }
}

export { useDomainSearchResults }
