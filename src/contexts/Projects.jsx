'use client';

import { createContext } from 'react';

const ProjectsContext = createContext({
  images: [],
  activeIdx: undefined,
  setActiveIdx: () => {},
});

export default ProjectsContext;
