import React from 'react';
import { RecoilRoot } from 'recoil';
import ToDoCreator from './ToDoCreator';
import ToDoList from './ToDoList';
function App() {
  return (
    <RecoilRoot>
      <ToDoCreator />
      <ToDoList />
    </RecoilRoot>
  );
}

export default App;
