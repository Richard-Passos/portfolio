'use client';

import { createContext } from 'react';

const ErrorContext = createContext({
  id: undefined,
  data: {},
});

const ErrorProvider = (props) => {
  return <ErrorContext.Provider {...props} />;
};

export default ErrorContext;
export { ErrorProvider };
