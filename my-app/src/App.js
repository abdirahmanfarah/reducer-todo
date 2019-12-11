import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'



function App() {
  return (
    <div>
      <div className="App">
        <h3> My Todo's</h3>
        <TodoForm  />
      </div>
        <TodoList 
          
        />
    </div>
  );
}

export default App;
