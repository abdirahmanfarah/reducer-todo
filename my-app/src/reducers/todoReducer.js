export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 4444
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_ITEM':
      return {
        ...state, 
        item: action.payload
      }
    default :
    return state;
  }
}