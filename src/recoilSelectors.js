import { selector } from 'recoil';
import { toDoListState, toDoListFilterState } from './recoilState';

const filteredToDoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const currentFilter = get(toDoListFilterState);
    const toDos = get(toDoListState);
    switch (currentFilter) {
      case 'Show Completed':
        return toDos.filter((elem) => elem.done);
      case 'Show Uncompleted':
        return toDos.filter((elem) => !elem.done);
      default:
        return toDos;
    }
  },
});

export default filteredToDoListState;
