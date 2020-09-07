import React, { Component } from 'react';
import CountContext from './CountContext';

class Count extends Component {
  static contextType = CountContext;
  render() {
    const { count, increment, decrement, reset } = this.context;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
}

export default Count;
