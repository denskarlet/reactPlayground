import React from 'react';
import { useRecoilState } from 'recoil';
import { toDoListFilterState } from './recoilState';

const ToDoListFilter = () => {
  const [filter, setFilter] = useRecoilState(toDoListFilterState);
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Not Completed</option>
      </select>
    </>
  );
};
export default ToDoListFilter;
