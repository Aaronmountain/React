import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { v4 } from 'uuid'

export const PokemonListCategoryBtn = ({ SequenceStatus, setLetter }) => {

  const FirstNameFilter = (letterArray) => {
     let results = letterArray.filter((Letter, index, arr) => {
       return arr.indexOf(Letter) === index;
     });
     return results.sort();
  }
  const categoryBtnClicked = (e) => {
    setLetter(e.target.textContent);
    SequenceStatus.current = true;
  }

  const PokemonList = useSelector(state => state.PokemonList);
  const pokemonNameFirstLetter = FirstNameFilter(PokemonList.pokemonNameFirstLetter)

  return (
    pokemonNameFirstLetter.map(FirstLetter => {
        return <button key={v4()} className='btn' onClick={categoryBtnClicked} >{FirstLetter}</button >
    })
  )
}

export default PokemonListCategoryBtn