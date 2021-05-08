import React, {useState,useReducer} from 'react';
import ModalText from './ModalText.js';
import { data } from './data.js';
import { reducer } from "./Reducer.js";
import './App.css';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

function App() {
  const [name, setName] = useState('');
  /* 
      1. reducer 是一個函式，他會在我們呼叫 dispatch 這個函式時才觸發一次
      2. reducer 一定要回傳 state，通常會每次 return 時都會用 展開運算子 先將原本的複製過來，
         之後再根據看你要變動什麼
      3. return {...state, 根據 state 裡的 key 看要做什麼更動}
  */

  /*  
     1.dispath 這個函式要傳入一個 "物件" 當參數後，dispath({type:'ADD_ITEM'}) ，在reducer函式中會被當作action
     小結: dispatch的參數就是reducer的action
     2. dispath({type:'ADD_ITEM', payload: 某某某 })，如有需要可傳入第二個 payload 參數(名稱可以自己取)，利用action.payload 即可讀取參數內容
  */
  
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(name){
      /* name為input中的value，輸入框有值就是 true ，  而將資料用變數儲存後利用 dispatch 第二個參數傳入 reducer函式中使用*/
      const newPeople = {id:new Date().getTime().toString(),name} 
      dispatch({type:'ADD_PEOPLE', payload:newPeople})
      setName('')
    }
    else{
      dispatch({ type: 'NO_VALUE' })
    }
  }
  const closeModal = () => {
    dispatch({ type:'CLOSE_MODAL'})
  }
  
  return (
    <>
      {state.isModalOpen && (
        <ModalText closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <article className='form'>
        <form>
          <div className='form-control'>
            <label>Name : </label>
            <input
              type='text'
              // id='firstName'
              // name='firstName' htmlFor='firstName'
              value={name}
              onChange={(e) => { setName(e.target.value)}}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      <article className='container'>
        {state.people.map((person) => {
          return (
            <div key={person.id} className='item'>
              <h4>{person.name}</h4>
              <button className='btn' onClick={() => dispatch({ type:'REMOVE_PEOPLE', payload: person.id })}>
                Remove
              </button>
            </div>
          );
        })}
      </article>
    </>
  );
}

export default App
