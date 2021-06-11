import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
// Components
import Recipe from './Components/Recipe.js';

function App() {
  // useState
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [isLoading, setIsLoading] = useState(false);

  // global variable
  const { REACT_APP_FOOD_SEARCH_ID, REACT_APP_FOOD_SEARCH_API_KEY, REACT_APP_FOOD_SEARCH_PATH } =
    process.env;
  const url = `${REACT_APP_FOOD_SEARCH_PATH}?q=${query}&app_id=${REACT_APP_FOOD_SEARCH_ID}&app_key=${REACT_APP_FOOD_SEARCH_API_KEY}`;

  // useEffect
  useEffect(() => {
    GetFood();
  }, [query]);

  // function
  const GetFood = async () => {
    const res = await axios.get(url);
    setRecipes(res.data.hits);
    setIsLoading(true);
  };
  const searchUpdate = (e) => {
    setSearch(e.target.value);
  };
  const searchFoodSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  const isFoodExist = () => {
    if (search.length > 0) {
      recipes.map((recipe) => {
        return (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            imgUrl={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        );
      });
    }
    if (search.length === 0) return <h1>Sorry，Can`t Find You Want</h1>;
  };

  return (
    <div className='formwrap pt-2'>
      <form onSubmit={searchFoodSubmit} className='mt-2'>
        <input
          className='form-search'
          type='text'
          placeholder='search'
          value={search}
          onChange={searchUpdate}
        />
        <button className='btn' type='submit'>
          Search
        </button>
      </form>
      <div className='recipeCardWrap'>{isLoading ? isFoodExist() : <h1>Hold on isLoading</h1>}</div>
    </div>
  );
}

export default App;
