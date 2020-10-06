import React, { useState, useRef, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { toDoListState } from './recoilState';

const ToDoCreator = () => {
  const [input, setInput] = useState({
    price: '',
    size: '',
    description: '',
  });
  const setToDoList = useSetRecoilState(toDoListState);
  const inputElement = useRef(null);

  const handleInput = ({ target }) => {
    const { value, name } = target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoList((old) => [...old, input]);
    setInput({
      price: '',
      size: '',
      description: '',
    });
  };

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const { price, size, description } = input;
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="description"
        name="description"
        ref={inputElement}
        value={description}
        onChange={handleInput}
      />
      <input placeholder="price" name="price" value={price} onChange={(e) => handleInput(e)} />
      <input placeholder="size" name="size" value={size} onChange={handleInput} />
      <button type="submit">Add todo</button>
    </form>
  );
};
export default ToDoCreator;
