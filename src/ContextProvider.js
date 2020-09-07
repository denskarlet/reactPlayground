import React, { Component } from 'react';
import CountContext from './CountContext';

class CountProvider extends Component {
  static contextType = CountContext;
  constructor() {
    super();
    this.state = {
      count: 0,
      increment: () => {
        this.setState((state) => ({
          count: state.count + 1,
        }));
      },
      decrement: () => {
        this.setState((state) => ({ count: state.count - 1 }));
      },
      reset: () => {
        this.setState({ count: 0 });
      },
    };
  }

  render() {
    return <CountContext.Provider value={this.state}>{this.props.children}</CountContext.Provider>;
  }
}

export default CountProvider;
