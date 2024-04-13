import { ProjectsProvider } from '@/contexts';
import { cn } from '@/utils';

const Projects = ({ images, className, ...props }) => {
  return (
    <ProjectsProvider value={{ images }}>
      <div
        className={cn('w-full', className)}
        {...props}
      />
    </ProjectsProvider>
  );
};

export default Projects;
