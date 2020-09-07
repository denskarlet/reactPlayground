import React from 'react';
import CountProvider from './CountProvider';
import Counter from './Counter';
function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}

export default App;
