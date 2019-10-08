import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
// import { reducer, initialValue } from './reducers/todoReducer';

function App() {
  // const [state, dispach] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;
