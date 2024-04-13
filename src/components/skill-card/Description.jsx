import { cn } from '@/utils';

import { Text } from '../ui/text';

const SkillCardDescription = ({ className, ...props }) => {
  return (
    <Text
      className={cn(
        'w-9/10 -translate-y-2 text-center text-xs font-medium opacity-0 duration-300 first-letter:uppercase group-data-open:translate-y-0 group-data-open:opacity-100 group-data-open:delay-150',
        className,
      )}
      {...props}
    />
  );
};

export default SkillCardDescription;
