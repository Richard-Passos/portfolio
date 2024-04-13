import { cn } from '@/utils';

import Title from '../title';

const ProjectsTableTitle = ({ className, ...props }) => {
  return (
    <Title
      className={cn(
        'basis-full sm:basis-1/2 text-4xl sm:text-5xl',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsTableTitle;
