import React, { useContext } from 'react';
import CountContext from './CountContext';

const Counter = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
export default Counter;
