import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import filteredToDoListState from './recoilSelectors';
import ToDoItem from './ToDoItem';
import Sort from './Sort';
import Filter from './Filter';

const ToDoList = () => {
  const [filter, setFilter] = useState('description');
  const toDoList = useRecoilValue(filteredToDoListState);
  const toRender = toDoList.map((elem, i) => <ToDoItem key={`todo${i}`} item={elem} />);
  return (
    <>
      <Filter updateFilter={setFilter} filter={filter} />
      <ul>{<Sort property={filter}>{toRender}</Sort>}</ul>
    </>
  );
};
export default ToDoList;
