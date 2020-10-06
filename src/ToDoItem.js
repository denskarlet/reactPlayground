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
  const { description, size, price } = item;
  return (
    <li key={item.id}>
      <div>
        <span>Description: {description}</span>
        <span>Size: {size}</span>
        <span>Price: {price}</span>
      </div>

      <input onChange={toggleComplete} checked={item.done} type="checkBox" />
    </li>
  );
};

export default ToDoItem;
