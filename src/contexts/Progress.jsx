'use client';

import { createContext } from 'react';

const ProgressContext = createContext({ value: 0, min: 0, max: 100 });

const ProgressProvider = (props) => {
  return <ProgressContext.Provider {...props} />;
};

export default ProgressContext;
export { ProgressProvider };
