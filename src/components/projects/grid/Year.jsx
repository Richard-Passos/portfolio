import { cn } from '@/utils';

import { Text } from '../../ui/text';

const ProjectsGridYear = ({ className, ...props }) => {
  return (
    <Text
      className={cn(
        'relative z-10 translate-y-full justify-self-end text-sm font-normal transition-[transform,clip-path] duration-300 [clip-path:inset(0_0_100%_0)] group-hover:translate-y-0 group-hover:[clip-path:inset(0)]',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsGridYear;
