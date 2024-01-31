import { cn } from '@/utils';

import { Text } from '../../ui/text';

const ProjectsGridNumber = ({ className, index, ...props }) => {
  return (
    <Text
      className={cn(
        'outline-text pointer-events-none absolute bottom-0 right-0 -z-10 translate-y-1/2 text-[28vw] text-muted sm:text-[min(10vw,8rem)]/[1]',
        className,
      )}
      {...props}
    >
      {`${index + 1}`.padStart(2, '0')}/
    </Text>
  );
};

export default ProjectsGridNumber;
