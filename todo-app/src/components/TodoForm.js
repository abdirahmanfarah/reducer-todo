import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/todoReducer'

const TodoForm = () => {
  const [state, dispach] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleChanges = e => {
    e.preventDefault();
    setNewTodo(e.target.value);
  }

  return (
    <form>
      {!state.completed ? (
        <h1>
          {state.item}
            {/* <button onClick={() => dispatch({
              type: 'TOGGLE_TASK'
            })}>

            </button> */}
        </h1>
      ) : (

         <div>
            <input  
            className="todo-input"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
            />
            {/* <button
            onClick={() =>
            dispatch({ type: 'SET_TODO', payload: newTodo})
            }
            >
                Update Todo
            </button> */}
         </div>
  )}
    </form>
  )
}
export default TodoForm;