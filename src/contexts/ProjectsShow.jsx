'use client';

import { createContext, useState } from 'react';

const ProjectsShowContext = createContext({
  projects: [],
  setProjects: () => {},
  role: '',
  setRole: () => {},
  type: '',
  setType: () => {},
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
        setRole: handleSetData('role'),
        setType: handleSetData('type'),
        ...value,
      }}
      {...props}
    />
  );
};

export default ProjectsShowContext;
export { ProjectsShowProvider };
