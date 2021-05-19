// PokemonList
export const FetchPokemonList = page => async dispatch => {
  try{
    dispatch({
      type:'POKEMON_LIST_LOADING'
    })
  
    const perpage = 15;
    const offset = ( page * perpage ) - perpage;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${perpage}&offset=${offset}`
    
    const res = await fetch(url)
    const pokemonData = await res.json()
    let pokemonNameFirstLetter = pokemonData.results.map(pokemon => {
      return pokemon.name[0]
    })
    dispatch({
      type:'POKEMON_LIST_SUCCESS',
      payload: pokemonData.results,
      pokemonNameFirstLetter: pokemonNameFirstLetter,
      count: pokemonData.count
    })
  
  }catch(e) {
    dispatch({
      type: 'POKEMON_LIST_FAIL',
    })
  }
}

// Every Single Pokemon
export const GetPokemon = pokemon => async dispatch => {
  try {
    dispatch({
      type: 'POKEMON_MULTIPLE_LOADING'
    })

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    const res = await fetch(pokemonUrl)
    const pokemonData = await res.json()
    dispatch({
      type: 'POKEMON_MULTIPLE_SUCCESS',
      payload: pokemonData,
      pokemonName: pokemon
    })

  } catch (e) {
    dispatch({
      type: 'POKEMON_MULTIPLE_FAIL',
    })
  }
} 