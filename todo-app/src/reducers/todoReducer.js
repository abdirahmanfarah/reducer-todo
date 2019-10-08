export const initialState = {
  // todo: [
    
      item: 'Learn JS',
      completed: false,
      id:4
    
  // ]
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_NEW_TODO':
      const newTodo = {
        name: action.payload,
        id:Date.now(),
        completed:false
      };
      return {
        ...state,
        todo:[...state.todo, newTodo]
      };
      
    default:
      return state
  }
}