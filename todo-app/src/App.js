import React, {useCallback, useState, useEffect} from 'react';
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

  const [id, setId] = useState([]);
  useEffect(
    () => {
      const url = 'http://localhost:8080/todo/count'
      axios.get(url).then(function(response){
        let max_num = response.data[0].id
        console.log(max_num)
        setId(max_num+1)
      })
    },
    [], // 초기 렌더링 시 가져오는 로직
  );

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
    [todos, id],
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
  );

  const onSelect = useCallback(
    category => {
      const url = 'http://localhost:8080/todo/category'
      axios.get(url, {"params": category})
        .then((response) => {
          console.log(response.data);
          setTodos(response.data);
          setCat(category);
        })
        .catch((response) => {
          console.log('error');
        });
    },
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
      const url = 'http://localhost:8080/todo/remove';
      axios.delete(url, { data: { id: id }, headers: { "Authorization": "***" } });
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
