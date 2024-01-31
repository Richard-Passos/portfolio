import { cn } from '@/utils';

import Title from '../title';

const ProjectsListTitle = ({ className, ...props }) => {
  return (
    <Title
      className={cn(
        'col-span-full text-4xl sm:col-span-2 sm:place-self-start sm:text-5xl',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsListTitle;
