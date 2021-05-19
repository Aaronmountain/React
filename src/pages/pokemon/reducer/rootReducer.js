import { combineReducers } from "redux";
import PokemonListReducer from './PokemonListReducer';
import PokemonReducer from './PokemonReducer';

const rootReducer = combineReducers({
  PokemonList : PokemonListReducer,
  Pokemon: PokemonReducer
});

export default rootReducer