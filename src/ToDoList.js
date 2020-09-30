import React from 'react';
import { useRecoilValue } from 'recoil';
import toDoListState from './recoilState';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const toDoList = useRecoilValue(toDoListState);
  const toRender = toDoList.map((elem, i) => <ToDoItem key={elem.id} item={elem} />);
  return <ul>{toRender}</ul>;
};
export default ToDoList;
