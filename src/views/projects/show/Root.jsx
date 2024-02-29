import { ProjectsShowProvider } from '@/contexts';
import { cn } from '@/utils';

const ProjectsViewShow = ({ defaultData, className, ...props }) => {
  return (
    <ProjectsShowProvider defaultData={defaultData}>
      <div
        className={cn(
          'flex w-9/10 max-w-screen-lg flex-col items-center gap-md',
          className,
        )}
        {...props}
      />
    </ProjectsShowProvider>
  );
};

export default ProjectsViewShow;
