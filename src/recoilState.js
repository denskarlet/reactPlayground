import { atom } from 'recoil';

const toDoListState = atom({
  key: 'toDoList',
  default: [],
});
const toDoListFilterState = atom({
  key: 'toDoListFilterState',
  value: 'Show All',
});

export { toDoListState, toDoListFilterState };
