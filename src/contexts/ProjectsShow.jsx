'use client';

import { createContext } from 'react';

const ProjectsShowContext = createContext({
  projects: '',
  setProjects: () => {},
  role: '',
  setRole: () => {},
  type: '',
  setType: () => {},
});

export default ProjectsShowContext;
