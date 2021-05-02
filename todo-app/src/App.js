import React, {useCallback, useState, useRef} from 'react';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import DropDown from './components/DropDown';

function App() {
  const [todos, setTodos] = useState([
    { 
      category: '인삿말',
      id:1,
      text: '안녕하세요',
      checked: true,
    },
    {
      category: '인삿말',
      id:2,
      text: '반갑습니다',
      checked: true,
    },
    {
      category: '매장안내',
      id:3,
      text: '하이~ 에이치아이',
      checked: false,
    },
  ])

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  ); //todos가 바뀌었을 때만 함수 생성

  const onSelect = useCallback(
    category => {
      setTodos(todos.filter(todo => todo.category == category));
    },
    [todos],
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
    <DropDown onSelect={onSelect} />
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>
  )
}

export default App;
