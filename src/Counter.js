import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

const mapStateToProps = (state) => state.count;
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement()),
  reset: () => dispatch(actions.reset()),
});

function Counter(props) {
  const { count, increment, decrement, reset } = props;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
