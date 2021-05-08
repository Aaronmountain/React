import React, { useState } from 'react';
import { data } from '../useContext/data.js';
import { Link } from 'react-router-dom';

/*
  map方法中， <Link to={`/person/${person.id}`}> ，
  1. to 裡面的路徑一定要符合我們在 Route 所設定的路徑
  2. people 裡面有 id ，因此利用 模板字符串的方式 ${person.id} 放入
  3. Route，path中會確認 id的資料，符合就前往那個 componet 頁面
*/

const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className='container'>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <Link to={`/${person.id}`}>View More</Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;