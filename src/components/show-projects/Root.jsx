import { ShowProjectsProvider } from '@/contexts';
import { cn } from '@/utils';

const ProjectsViewShow = ({ defaultData, className, ...props }) => {
  return (
    <ShowProjectsProvider defaultData={defaultData}>
      <div
        className={cn('flex w-full flex-col items-center gap-md', className)}
        {...props}
      />
    </ShowProjectsProvider>
  );
};

export default ProjectsViewShow;
