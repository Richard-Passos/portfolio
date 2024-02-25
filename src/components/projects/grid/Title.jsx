import { cn } from '@/utils';

import Title from '../title';

const ProjectsGridTitle = ({ className, ...props }) => {
  return (
    <Title
      animationType='onGroupHover'
      className={cn(
        'absolute left-1/2 top-1/2 z-10 w-9/10 -translate-x-1/2 -translate-y-1/2 text-center text-[10vw] font-bold tracking-tight sm:text-[min(6vw,3rem)]',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsGridTitle;
