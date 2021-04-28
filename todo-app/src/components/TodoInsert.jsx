import React, { useState, useCallback } from 'react'
import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss'

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
        console.log(e.target.value);
    }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성

    //onClick으로도 가능!!
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); //value 값 초기화
            e.preventDefault(); //submit 이벤트는 브라우저에서 새로고침을 발생시키는데, 이를 방지하기 위해 이 함수를 호출
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요" 
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert
