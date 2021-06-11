import React from 'react';

function Recipe({ title, calories, imgUrl, ingredients }) {
  return (
    <div className='recipeCard'>
      <h1 className='pb-1'>{title}</h1>
      <ul>
        {ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient.text}.</li>;
        })}
      </ul>
      <p className='pt-2'>{calories}</p>
      <img className='py-1' src={imgUrl} alt='menu' />
    </div>
  );
}

export default Recipe;
