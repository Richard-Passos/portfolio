'use client';

import { createContext } from 'react';

const ProjectsShowContext = createContext({
  role: '',
  setRole: () => {},
  type: '',
  setType: () => {},
});

export default ProjectsShowContext;
