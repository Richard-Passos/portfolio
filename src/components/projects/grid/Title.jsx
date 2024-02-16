import { cn } from '@/utils';

import Title from '../title';

const ProjectsGridTitle = ({ className, ...props }) => {
  return (
    <Title
      animationType='onGroupHover'
      className={cn(
        'max-w-9/10 absolute z-10 text-center text-[10vw] sm:text-[min(6vw,2.75rem)]',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsGridTitle;
