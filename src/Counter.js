import React, { useReducer, useCallback } from 'react';
import { initialState, countReducer } from './countReducer';
import * as actions from './actions';

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const increment = useCallback(() => {
    dispatch(actions.increment());
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch(actions.decrement());
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch(actions.reset());
  }, [dispatch]);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Counter;
