import React, { useState, useRef, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { toDoListState } from './recoilState';

const ToDoCreator = () => {
  const [input, setInput] = useState('');
  const setToDoList = useSetRecoilState(toDoListState);
  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    setToDoList((oldList) => {
      return [...oldList, { description: input, done: false, id: `task-${oldList.length}` }];
    });
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputElement} value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Add todo</button>
    </form>
  );
};
export default ToDoCreator;
