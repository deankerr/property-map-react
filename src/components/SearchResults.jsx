import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SearchResults(props) {
  // testing ======
  const params = useParams()

  useEffect(() => {
    console.log('SearchResults params:', params)
  }, [params])

  return <p>Search Results</p>
}
