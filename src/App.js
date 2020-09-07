import React, { Component } from 'react';
import CountProvider from './ContextProvider';
import Count from './Count';

class App extends Component {
  render() {
    return (
      <CountProvider>
        <Count />
      </CountProvider>
    );
  }
}

export default App;
