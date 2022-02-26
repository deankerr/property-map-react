import './Search.css'
import { useState, useEffect } from 'react'

import Map from './Map'

export default function Search(props) {
  const { searchCache, saveSearchCache, listingType } = props

  const DEFAULT_FORM_VALUES = {
    suburb: '',
    state: 'VIC',
    priceMin: '0',
    priceMax: '0',
    bedsMin: '0',
    bathsMin: '0',
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
    if (searchCache.formQuery && searchCache.formQuery.listingType === listingType) {
      console.log('setting query');
      setSearchForm(searchCache.formQuery)
      setFormQuery(searchCache.formQuery)
    } else {
      setSearchForm(DEFAULT_FORM_VALUES)
      setFormQuery({})
    }
  }, [])

  function handleSubmit(ev) {
    setFormQuery(searchForm)
    console.log('submit', searchForm);
    ev.preventDefault()
  }


  // Generate Price select options
  let priceOptions = []
  if (listingType === 'Rent') {
    for (let i = 100; i <= 2000; i = i + 100) priceOptions.push(<option value={i} key={i}>{'$' + i.toLocaleString("en-US")}</option>)
    for (let i = 3000; i <= 5000; i = i + 1000) priceOptions.push(<option value={i} key={i}>{'$' + i.toLocaleString("en-US")}</option>)
  } else {
    for (let i = 50000; i <= 1000000; i = i + 50000) priceOptions.push(<option value={i} key={i}>{'$' + i.toLocaleString("en-US")}</option>)
    for (let i = 1500000; i <= 5000000; i = i + 500000) priceOptions.push(<option value={i} key={i}>{'$' + i.toLocaleString("en-US")}</option>)
  }


  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    if (searchCache.data && searchCache.data.length === 0) setNoResults(true)
    else setNoResults(false)
  }, [searchCache])



  return (
    <div className="container-xl">

      <div className="row">
        <div className="col-lg-3">
          <h4>Search Properties For {listingType}</h4>

          <form onSubmit={handleSubmit}>

            <div className="row mb-3 justify-content-center">
              <div className="col-6 col-lg-8 px-2">
                <input className="form-control" type="text" name="suburb" placeholder="Suburb" onChange={handleFormChange} value={searchForm.suburb} />
              </div>

              <div className="col-4 col-lg-4 px-1">
                <select className="form-select" name="state" value={searchForm.state} onChange={handleFormChange}>
                  <option value="ACT">ACT</option>
                  <option value="NSW">NSW</option>
                  <option value="NT">NT</option>
                  <option value="QLD">QLD</option>
                  <option value="SA">SA</option>
                  <option value="TAS">TAS</option>
                  <option value="VIC">VIC</option>
                  <option value="WA">WA</option>
                </select>
              </div>
            </div>

            <div className="row mb-1 justify-content-center">
              <label className="col-4 col-lg-5 col-form-label text-nowrap">Price (min)</label>
              <div className="col-4 col-lg-7">
                <select className="form-select" name="priceMin" value={searchForm.priceMin} onChange={handleFormChange}>
                  <option value="0">Any</option>
                  {priceOptions.map(option => option)}
                </select>
              </div>

            </div>

            <div className="row mb-3 justify-content-center">
              <label className="col-4 col-lg-5 col-form-label text-nowrap">Price (max)</label>
              <div className="col-4 col-lg-7">
                <select className="form-select" name="priceMax" value={searchForm.priceMax} onChange={handleFormChange}>
                  <option value="0">Any</option>
                  {priceOptions.map(option => option)}
                </select>
              </div>
            </div>

            <div className="row mb-1 justify-content-center">
              <label className="col-4 col-lg-5 col-form-label text-nowrap">Bedrooms (min)</label>
              <div className="col-4 col-lg-7">
                <select className="form-select" name="bedsMin" value={searchForm.bedsMin} onChange={handleFormChange}>
                  <option value="0">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <div className="row mb-3 justify-content-center">
              <label className="col-4 col-lg-5 col-form-label text-nowrap">Bathrooms (min)</label>
              <div className="col-4 col-lg-7">
                <select className="form-select" name="bathsMin" value={searchForm.bathsMin} onChange={handleFormChange}>
                  <option value="0">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <button className="btn btn-primary">Search!</button>
          </form>

          {
            noResults && <p className='errorMessage'>No results found!</p>
          }
        </div>

        <div className="col-lg-9 px-0">
          <Map searchCache={searchCache} saveSearchCache={saveSearchCache} formQuery={formQuery} listingType={listingType} />
        </div>
      </div>
    </div>

  )

}
