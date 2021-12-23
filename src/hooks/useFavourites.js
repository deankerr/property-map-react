import { useState, useEffect } from 'react'

function getStorageValue() {
  const saved = localStorage.getItem('faves')
  const inital = JSON.parse(saved)
  return inital || []
}

function useFavourites() {
  const [ faves, setFaves ] = useState(getStorageValue())

  useEffect(() => {
    localStorage.setItem('faves', JSON.stringify(faves))
    console.log('faves:', faves);
  }, [faves])

  function addFave(item) {
    setFaves([...faves, item])
  }

  function removeFave(item) {
    const newFaves = faves.filter(items => items != item)
    setFaves(newFaves)
  }

  return { faves, addFave, removeFave }
}

export { useFavourites }
