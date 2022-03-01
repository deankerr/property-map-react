import Search from './Search'

export default function Rent(props) {
  const { searchCache, saveSearchCache } = props

  return <Search searchCache={searchCache} saveSearchCache={saveSearchCache} listingType="Rent" />
}
