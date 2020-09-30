import { atom } from 'recoil';

const toDoListState = atom({
  key: 'toDoList',
  default: [],
});

export default toDoListState;
