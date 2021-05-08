export const reducer = (state, action) => {
  if (action.type === 'ADD_PEOPLE') {
    /* 從呼叫 dispatch() 的地方傳入兩個參數，一個type，另一個式payload ，裡面存取新增人員的資料 
    利用變數，將舊的用 展開運算子 複製過來後，再加入 action.payload的人員資訊*/
    const newPeoples = [...state.people, action.payload]
    return {
      ...state,
      people: newPeoples,
      isModalOpen: true,
      modalContent: 'ADD_PEOPLE'
    }
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'NO_VALUE',
    }
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    }
  }
  if (action.type === 'REMOVE_PEOPLE') {
    const newPeople = state.people.filter( person => {
      return person.id !== action.payload
    })
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'REMOVE_PEOPLE',
    }
  }
  return state
}
