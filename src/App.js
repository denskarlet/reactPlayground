import React, { Component } from 'react';
import { act } from 'react-dom/test-utils';

const initialState = {
  count: 0,
};

let currentState = initialState;

// basic reducer
function countReducer(state = initialState, { type, payload }) {
  if (type === 'increment')
    return {
      ...state,
      count: state.count + 1,
    };
  if (type === 'decrement')
    return {
      ...state,
      count: state.count - 1,
    };
  if (type === 'reset')
    return {
      ...state,
      count: 0,
    };
  return state;
}
// very basic dispatch that returns updated state.. because it's really basic
function dispatch(action) {
  currentState = countReducer(currentState, action);
  return currentState;
}
function incrementCount() {
  const action = { type: 'increment' };
  return dispatch(action);
}
function decrementCount() {
  const action = { type: 'decrement' };
  return dispatch(action);
}
function resetCount() {
  const action = { type: 'reset' };
  return dispatch(action);
}

class App extends Component {
  constructor() {
    super();
    this.state = currentState;
  }
  increment = () => {
    this.setState(incrementCount());
  };
  decrement = () => {
    this.setState(decrementCount());
  };
  reset = () => {
    this.setState(resetCount());
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>{' '}
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
