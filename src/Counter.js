import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((count) => count + 1), [setCount]);
  const decrement = useCallback(() => setCount((count) => count - 1), [setCount]);
  const reset = useCallback(() => setCount(0), [setCount]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
