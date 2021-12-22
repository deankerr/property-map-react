import './Search.css'
import { useState } from 'react'

import Map from './Map'
import { useEffect } from 'react/cjs/react.development'

export default function Search(props) {
  const { searchCache, saveSearchCache, listingType } = props

  const DEFAULT_FORM_VALUES = {
    suburb: 'Carlton',
    state: 'VIC',
    priceMin: 'any',
    priceMax: 'any',
    bedsMin: 'any',
    bathsMin: 'any',
    listingType
  }

  const [searchForm, setSearchForm] = useState(DEFAULT_FORM_VALUES)

  function handleFormChange(ev) {
    setSearchForm({
      ...searchForm,
      [ev.target.name]: ev.target.value
    })
  }


  const [formQuery, setFormQuery] = useState({})

  useEffect(() => {
    if (searchCache.formQuery) {
      setSearchForm(searchCache.formQuery)
      setFormQuery(searchCache.formQuery)
    }
  }, [])

  function handleSubmit(ev) {
    setFormQuery(searchForm)
    ev.preventDefault()
  }


  let priceOptions = []

  for (let i = 0; i <= 2000; i = i + 100) {
    priceOptions.push(<option value={i} key={i}>{i}</option>)
  }


  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    if (searchCache.data && searchCache.data.length === 0) setNoResults(true)
    else setNoResults(false)
  }, [searchCache])

  
  // reset form if we just changed from rent <-> buy
  useEffect( () => {
    console.log('switched modes search')
    setSearchForm(DEFAULT_FORM_VALUES)
  }, [listingType])

  console.log(`Time to ${listingType}`);
  return (
    <div className="searchContainer">


      <div className="searchControls">
        <h3>Search Properties For {listingType}</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="suburb" placeholder="Suburb" onChange={handleFormChange} value={searchForm.suburb} />
          <select name="state" value={searchForm.state} onChange={handleFormChange}>
            <option value="ACT">ACT</option>
            <option value="NSW">NSW</option>
            <option value="NT">NT</option>
            <option value="QLD">QLD</option>
            <option value="SA">SA</option>
            <option value="TAS">TAS</option>
            <option value="VIC">VIC</option>
            <option value="WA">WA</option>
          </select>
          <br />
          <br />

          <label>
            Price (min)
            <select name="priceMin" value={searchForm.priceMin} onChange={handleFormChange}>
              <option value="any">Any</option>
              {priceOptions.map(option => option)}
            </select>
          </label>
          <br />

          <label>
            Price (max)
            <select name="priceMax" value={searchForm.priceMax} onChange={handleFormChange}>
              <option value="any">Any</option>
              {priceOptions.map(option => option)}
            </select>
          </label>
          <br />
          <br />

          <label>
            Bedrooms (min)
            <select name="bedsMin" value={searchForm.bedsMin} onChange={handleFormChange}>
              <option value="any">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <br />
          <br />

          <label>
            Bathrooms (min)
            <select name="bathsMin" value={searchForm.bathsMin} onChange={handleFormChange}>
              <option value="any">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <br />
          <br />
          <button>Search!</button>
        </form>

        {
          noResults && <p className='errorMessage'>No results found!</p>
        }
      </div>

      <div className="mapContainer">
        <Map searchCache={searchCache} saveSearchCache={saveSearchCache} formQuery={formQuery} listingType={listingType} />
      </div>

    </div>

  )

}
