import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => state.count;

function Counter(props) {
  const { count } = props;
  return <h1>{count}</h1>;
}

export default connect(mapStateToProps)(Counter);
