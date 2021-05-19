import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import { FetchPokemonList } from "../action/PokemonAction.js";
import PokemonListCategoryBtn from './PokemonListCategoryBtn.js';
import PokemonListSearchInput from './PokemonListSearchInput.js';

const PokemonList = ( props ) => {
  const [letter, setLetter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  let SequenceStatus = useRef(false);
  const dispatch = useDispatch();
  const PokemonList = useSelector(state => state.PokemonList );

  useEffect(() => {
    FetchData(1)
  }, [])

  const FetchData = (page = 1) => {
    dispatch(FetchPokemonList(page))
  }
  
  const showData = () => {
    if (PokemonList.loading) {
      return <p>loading</p>
    }

    if (PokemonList.data.length > 0){
      return PokemonList.data.map( pokemon => {
        return (
          <div key={v4()} className='pokemonNameWrap'>
            <p>{pokemon.name}</p>
            <Link to={`/pokemon/${pokemon.name}`}>View More</Link>
          </div>
        )
      })
    }

    if (PokemonList.errorMsg !== '') {
      return <p>{PokemonList.errorMsg}</p>
    }
  }

  const showCategoryBtnData = () => {
    return PokemonList.data.map(pokemon => {
      if (letter === pokemon.name[0]) {
        return (
          <div key={v4()} className='pokemonNameWrap'>
            <p>{pokemon.name}</p>
            <Link to={`/pokemon/${pokemon.name}`}>View More</Link>
          </div>
        )
      }
    })
  }
  
  const PageChangefunc = e => {
    SequenceStatus.current = false;
    if (e.selected !== undefined){
      FetchData(e.selected + 1);
      setCurrentPage( e.selected + 1);
      return
    }
    FetchData(currentPage);
  }
  
  return (
    <div className='pokemonListWrap'>

      <PokemonListSearchInput linkSearchPath={props}/>

      <div className="categorybtn">
        <button key={v4()} className='btn' onClick={PageChangefunc} >All</button >
        <PokemonListCategoryBtn SequenceStatus={SequenceStatus} setLetter={setLetter} />
      </div>
      
      {SequenceStatus.current ? showCategoryBtnData() : showData()}

      {PokemonList.data.length > 0 && (
          <ReactPaginate
            pageCount = {Math.ceil(PokemonList.count / 15)}
            pageRangeDisplayed = {2} // 當下所處頁面左右要顯示的頁數
            marginPagesDisplayed = {1} // 左右邊際要顯示的頁數
            onPageChange = { PageChangefunc }
            containerClassName='pagination'
          />
      )}
    </div>
  )
}

export default PokemonList

