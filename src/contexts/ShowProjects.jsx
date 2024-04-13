'use client';

import { createContext, useState } from 'react';

const ShowProjectsContext = createContext({
  projects: [],
  setProjects: () => {},
  type: '',
  setType: () => {},
  isLastPage: false,
  setIsLastPage: () => {},
});

const ShowProjectsProvider = ({ defaultState, value, ...props }) => {
  const [state, setState] = useState(defaultState);

  const handleSetState = (id) => (value) =>
    setState((state) => {
      const isFn = typeof value === 'function';

      return { ...state, [id]: isFn ? value(state[id]) : value };
    });

  return (
    <ShowProjectsContext.Provider
      value={{
        ...state,
        setProjects: handleSetState('projects'),
        setType: handleSetState('type'),
        setIsLastPage: handleSetState('isLastPage'),
        ...value,
      }}
      {...props}
    />
  );
};

export default ShowProjectsContext;
export { ShowProjectsProvider };
