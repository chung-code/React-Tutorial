import React, {useCallback, useState, useRef} from 'react';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import DropDown from './components/DropDown';
import { Button } from 'react-bootstrap';
import axios from 'axios';
// import useFetch from './useFetch.js';

function App() {
  const [todos, setTodos] = useState([]);
  const [cat, setCat] = useState([]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text, cat) => {
      const todo = {
        category: cat,
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  ); //todos가 바뀌었을 때만 함수 생성

  const onClick = useCallback(
    () => {
      const url = 'http://localhost:8080/todo'
      axios.get(url).then(function(response){
        console.log(response.data)
        setTodos(response.data)
      })
    },
    [todos],
  );

  const onSelect = useCallback(
    category => {
      const url = 'http://localhost:8080/todo/category'
      axios.get(url, {"params": category}).then(function(response){
        console.log(response.data)
        setTodos(response.data)
        setCat(category)
      })
    },
    // [todos],
    [todos, cat],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    },
    [todos],
  );

  return (
  <TodoTemplate>
    <Button onClick={onClick}> all </Button>
    <DropDown onSelect={onSelect} />
    <TodoInsert onInsert={onInsert} cat={cat}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>
  )
}

export default App;
