'use client';

import { createContext, useState } from 'react';

const ProjectsContext = createContext({
  images: [],
  activeIdx: undefined,
  setActiveIdx: () => {},
});

const ProjectsProvider = ({ value, ...props }) => {
  const [activeIdx, setActiveIdx] = useState(undefined);

  return (
    <ProjectsContext.Provider
      value={{ activeIdx, setActiveIdx, ...value }}
      {...props}
    />
  );
};

export default ProjectsContext;
export { ProjectsProvider };
