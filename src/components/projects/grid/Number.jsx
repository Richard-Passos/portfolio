import { cn } from '@/utils';

import { Text } from '../../ui/text';

const ProjectsGridNumber = ({ className, idx, ...props }) => {
  return (
    <Text
      className={cn(
        'absolute left-sm top-sm z-10 -translate-y-full text-sm font-normal transition-[transform,clip-path] duration-300 [clip-path:inset(100%_0_0_0)] group-hover:translate-y-0 group-hover:[clip-path:inset(0)]',
        className,
      )}
      {...props}
    >
      {`${idx + 1}`.padStart(2, '0')}/
    </Text>
  );
};

export default ProjectsGridNumber;
