import Search from './Search'

export default function Buy(props) {
  const { searchCache, saveSearchCache } = props

  return <Search searchCache={searchCache} saveSearchCache={saveSearchCache} listingType="Sale" />
}
