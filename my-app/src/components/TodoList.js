import React from 'react';
import Todo from './Todo';

const TodoList = props => {

  return(
    <div className='todoList'>
      {/* {props.todo.map(item => (
        <Todo
        key={item.id}
        item={item}
        />
      ))} */}
    </div>
  )
}
export default TodoList;