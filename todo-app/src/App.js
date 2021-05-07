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

  // 1
  // const nextId = useRef(4);

  // const onInsert = useCallback(
  //   (text, cat) => {
  //     const todo = {
  //       category: cat,
  //       id: nextId.current,
  //       text,
  //       checked: false
  //     };
  //     setTodos(todos.concat(todo));
  //     nextId.current += 1;
  //     console.log(todo)
  //     const url = 'http://localhost:8080/todo/write'
  //     axios.put(url, todo).then(function(response){
  //       console.log(response.data)
  //     })
  //   },
  //   [todos],
  // ); //todos가 바뀌었을 때만 함수 생성


  //2
  const [id, setId] = useState(6);

  const onInsert = useCallback(
    (text, cat) => {
      const todo = {
        category: cat,
        id: id,
        text: text,
        checked: false
      };
      setTodos(todos.concat(todo));
      setId(id + 1);
      console.log(todo)
      const url = 'http://localhost:8080/todo/write'
      axios.put(url, todo).then(function(response){
        console.log(response.data)
      })
    },
    [todos],
  ); //todos가 바뀌었을 때만 함수 생성


// 비동기 작업을 수행하기 위해 then을 통한 콜백함수를 사용했지만, async-await 구문을 통한 작업 가능
  const onClick = useCallback(
    () => {
      const url = 'http://localhost:8080/todo/list'
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
    [todos, cat],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
      const url = 'http://localhost:8080/todo/remove';
      axios.delete(url, { data: { id: id }, headers: { "Authorization": "***" } });
    },
    [todos],
  );

  // const onRemove = useCallback(
  //   id => {
  //     setTodos(todos.filter(todo => todo.id !== id));
  //     const url = 'http://localhost:8080/todo/remove';
  //     axios.get(url, { "params": id });
  //   },
  //   [todos],
  // );

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
