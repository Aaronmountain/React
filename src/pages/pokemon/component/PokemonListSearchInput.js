import React, { useState } from 'react'

const PokemonListSearchInput = (props) => {
  const [search, setSearch] = useState('');
  const keyboardSearch = e => {
    if (e.key === 'Enter') props.linkSearchPath.history.push(`/pokemon/${search}`)
  }

  return (
    <div className="searchContainer">
      <p>Search: </p>
      <input
        type="text"
        placeholder='Entry The Pokemon Name'
        onChange={e => setSearch(e.target.value.toLowerCase())}
        onKeyUp={keyboardSearch}
      />
      <button onClick={() => props.linkSearchPath.history.push(`/pokemon/${search}`)}>Search</button>
    </div>
  )
}

export default PokemonListSearchInput
