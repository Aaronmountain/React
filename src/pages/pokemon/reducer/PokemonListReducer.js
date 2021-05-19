const defaultState = {
  loading: false,
  data: [],
  errorMsg:'',
  count: 0,
  pokemonNameFirstLetter: []
}


const PokemonListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'POKEMON_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: ''
      }

    case 'POKEMON_LIST_FAIL':
      return{
        ...state,
        loading: false,
        errorMsg:'sorry,unable to get pokemon'
      }

    case 'POKEMON_LIST_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload,
        count: action.count,
        pokemonNameFirstLetter: action.pokemonNameFirstLetter,
        errorMsg:''
      }
    
    default:
      return state
  }
}


export default PokemonListReducer