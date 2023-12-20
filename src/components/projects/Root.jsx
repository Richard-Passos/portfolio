'use client';

import { ProjectsContext } from '@/contexts';
import { cn } from '@/utils';

const Projects = ({ images, className, ...props }) => {
  return (
    <ProjectsContext.Provider value={{ images }}>
      <div
        className={cn('w-[90%] max-w-screen-lg', className)}
        {...props}
      />
    </ProjectsContext.Provider>
  );
};

export default Projects;
