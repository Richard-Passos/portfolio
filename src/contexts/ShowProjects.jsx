'use client';

import { createContext, useState } from 'react';

const ShowProjectsContext = createContext([
  {
    items: [],
    type: '',
    isLastPage: false,
    isLoading: false,
  },
  () => {},
]);

const ShowProjectsProvider = ({ defaultState, value, ...props }) => {
  const [state, setState] = useState(defaultState);

  return (
    <ShowProjectsContext.Provider
      value={[
        {
          ...state,
          ...value,
        },
        setState,
      ]}
      {...props}
    />
  );
};

export default ShowProjectsContext;
export { ShowProjectsProvider };
