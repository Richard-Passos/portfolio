'use client';

import { createContext } from 'react';

const ErrorContext = createContext({
  slug: undefined,
  sections: {},
  metadata: {},
});

const ErrorProvider = (props) => {
  return <ErrorContext.Provider {...props} />;
};

export default ErrorContext;
export { ErrorProvider };
