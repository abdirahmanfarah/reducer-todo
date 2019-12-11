import React, { useState, useReducer } from 'react';
// import { reducer, initialState } from './reducers/todoReducer';
import { reducer, initialState} from '../reducers/todoReducer';

const TodoForm = () => {
  const [taskState, dispatch] = useReducer(reducer, initialState);
  //  console.log(reducer, initialState)
  const [newTask, setNewTask] = useState('');

  const handleChanges = e => {
    dispatch({ type: 'UPDATE_TASK_TEXT'});
    setNewTask(e.target.value)
    console.log(handleChanges)
  }
  return(
    
      <form>
        <input
          type='text'
          name = 'task'
          id = ''
          value={newTask}
          onChange={handleChanges}
        />
        <button onClick = {() => {
          dispatch({ type: 'UPDATE_ITEM', payload: newTask})
        }}
        > Add</button>
        
      </form>
  
  )
}

export default TodoForm;