import { cn } from '@/utils';

import Title from '../title';

const ProjectsGridTitle = ({ className, ...props }) => {
  return (
    <Title
      animationType='onGroupHover'
      className={cn(
        'absolute z-10 max-w-[90%] text-center text-[10vw] sm:text-[min(6vw,2.75rem)]',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsGridTitle;
