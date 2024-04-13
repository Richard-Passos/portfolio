import { ShowProjectsProvider } from '@/contexts';
import { cn } from '@/utils';

const ProjectsViewShow = ({ defaultState, className, ...props }) => {
  return (
    <ShowProjectsProvider defaultState={defaultState}>
      <div
        className={cn('flex w-full flex-col items-center gap-md', className)}
        {...props}
      />
    </ShowProjectsProvider>
  );
};

export default ProjectsViewShow;
