import React, { useState } from 'react';
import CountContext from './CountContext';

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return <CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>;
};
export default CountProvider;
