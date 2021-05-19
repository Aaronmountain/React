const DefaultState = {
  loading: false,
  data: {},
  errorMsg:''
}

function PokemonReducer(state = DefaultState, action) {
  switch (action.type) {
    case 'POKEMON_MULTIPLE_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: ''
      }
    case 'POKEMON_MULTIPLE_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'sorry, unable to get the pokemon'
      }
    case 'POKEMON_MULTIPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.pokemonName]: action.payload
        },
        errorMsg: ''
      }
    default:
      return state
  }
}

export default PokemonReducer
