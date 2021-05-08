import React, {useState,useContext, createContext} from 'react';
import { data } from './data.js'
import './App.css';

// 創建一個容器，在底層需要使用 provider 所包住時提供的 value 時，直接利用 useContext (容器名稱)，
// 直接解構取得 ， const { props名稱 } = useContext (容器名稱)
// 設立變數存取後利用物件使用方法使用 ， const statename = useContext (容器名稱) ，使用時， statename.props名稱
const peopleContext = createContext();


function App() {
  const [peoples,setPeoples] = useState(data)
  const removePerson = (id) => {
    setPeoples((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <peopleContext.Provider className='container' value={ { peoples,removePerson } }>
      <List peoples={peoples}/>
    </peopleContext.Provider>
  );
}

function List({ peoples }) {
  // 確認利用 useContext 接到的東西是什麼，答案是:provider 包住時所傳的 value 是一個物件
  const stateData = useContext(peopleContext)
  console.log(stateData);
  return (
    <>
      {peoples.map( people => {
        return <Item key={people.id} name={people.name} id={people.id}/>
      })}
    </>
  );
}

function Item({ name, id }) {
  const { removePerson } = useContext(peopleContext)

  return (
    <div className='item'>
      <h4>{name}</h4>
      {/* 點擊事件時，看要使用箭頭函式幫忙呼叫函式必要時傳入參數，
      或是在外自定義一個函式，然後呼叫另一個我們想要執行的函式 */}
      <button className='btn' onClick={() => removePerson(id)}>remove</button>
    </div>
  );
}



export default App
