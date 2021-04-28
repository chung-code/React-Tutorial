import React, {useCallback, useState, useRef} from 'react';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: '안녕하세요',
      checked: true,
    },
    {
      id:2,
      text: '반갑습니다',
      checked: true,
    },
    {
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

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos}/>
  </TodoTemplate>
  )
}

export default App;
