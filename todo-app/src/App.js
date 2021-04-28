import React from 'react';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';

function App() {
  return (
  <TodoTemplate>
    <TodoInsert/>
    <TodoList/>
  </TodoTemplate>
  )
}

export default App;
