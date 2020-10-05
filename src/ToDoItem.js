import React from 'react';
import { useRecoilState } from 'recoil';
import { toDoListState } from './recoilState';

const ToDoItem = ({ item }) => {
  const [toDoList, setToDoList] = useRecoilState(toDoListState);
  const toggleComplete = () => {
    const newList = toDoList.map((elem) => {
      if (elem === item) return { ...item, done: !item.done };
      return elem;
    });
    setToDoList(newList);
  };

  return (
    <li key={item.id}>
      <span>{item.description}</span>
      <input onChange={toggleComplete} checked={item.done} type="checkBox" />
    </li>
  );
};

export default ToDoItem;
