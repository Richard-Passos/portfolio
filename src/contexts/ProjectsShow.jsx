'use client';

import { createContext, useState } from 'react';

const ProjectsShowContext = createContext({
  projects: [],
  setProjects: () => {},
  type: '',
  setType: () => {},
  isLastPage: false,
  setIsLastPage: () => {},
});

const ProjectsShowProvider = ({ defaultData, value, ...props }) => {
  const [data, setData] = useState(defaultData);

  const handleSetData = (id) => (content) =>
    setData((state) => {
      const isFn = typeof content === 'function';

      return { ...state, [id]: isFn ? content(state[id]) : content };
    });

  return (
    <ProjectsShowContext.Provider
      value={{
        ...data,
        setProjects: handleSetData('projects'),
        setType: handleSetData('type'),
        setIsLastPage: handleSetData('isLastPage'),
        ...value,
      }}
      {...props}
    />
  );
};

export default ProjectsShowContext;
export { ProjectsShowProvider };
