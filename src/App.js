import React from 'react';
import { RecoilRoot } from 'recoil';
import ToDoCreator from './ToDoCreator';
import ToDoList from './ToDoList';
import ToDoListFilter from './ToDoListFilter';
function App() {
  return (
    <RecoilRoot>
      <ToDoListFilter />
      <ToDoCreator />
      <ToDoList />
    </RecoilRoot>
  );
}

export default App;
