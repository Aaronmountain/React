export const reducer = (state, action) => {
  if (action.type === 'ADD_PEOPLE') {
    /* 從呼叫 dispatch() 的地方傳入兩個參數，一個type，另一個是payload，裡面存取新增人員的資料。
    設立變數存取舊state中的people(展開運算子淺拷貝)，及 action.payload 的人員資料
    最後一樣 return {...state,和想改變的的state或資料}
    */
    const newPeoples = [...state.people, action.payload];
    return {
      ...state,
      people: newPeoples,
      isModalOpen: true,
      modalContent: 'ADD_PEOPLE',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'NO_VALUE',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === 'REMOVE_PEOPLE') {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload;
    });
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'REMOVE_PEOPLE',
    };
  }
  return state;
};
