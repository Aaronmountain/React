import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

import { GetPokemon } from '../action/PokemonAction';

function Pokemon(props) {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch()
  const pokemonState = useSelector(state => state.Pokemon)
  
  useEffect(() => {
    dispatch(GetPokemon(pokemonName))
  },[])

  const showData = () => {
    const pokemonStateArray = Object.keys(pokemonState.data)
    if (pokemonStateArray.includes(pokemonName)){
      const pokemonData = pokemonState.data[pokemonName];
      return (
        <div className="pokemonSatus">
          <div className="pokemon">
            <h1>Sprites</h1>
            <img src={pokemonData.sprites.front_default}/>
            <img src={pokemonData.sprites.front_shiny}/>
            <img src={pokemonData.sprites.back_default}/>
            <img src={pokemonData.sprites.back_shiny}/>
          </div>
          <div className="pokemon">
            <h1>Stats</h1>
            {pokemonData.stats.map( stat => {
              return <p key={v4()}>{stat.stat.name}:{stat.base_stat}</p>
            })}
          </div>
          <div className="pokemon">
            <h1>Abilities</h1>
            {pokemonData.abilities.map( Ability => {
              return <p key={v4()}>{Ability.ability.name}</p>
            })}
          </div>
        </div>
      )
    }
    if (pokemonState.loading) {
      return <p>loading</p>
    }
    if (pokemonState.errorMsg !== '') {
      return <p>{pokemonState.errorMsg}</p>
    }
  }

  return (
    <div className="pokemonWrap">
      <h1>{pokemonName}</h1>
      {showData()}
    </div>
  )
}

export default Pokemon

