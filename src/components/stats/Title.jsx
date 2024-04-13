import { cn } from '@/utils';

import { TextSubtitle } from '../ui/text';

const StatsTitle = ({ className, ...props }) => {
  return (
    <TextSubtitle
      className={cn('text-7xl font-semibold tracking-tight sm:text-8xl first-letter:uppercase', className)}
      {...props}
    />
  );
};

export default StatsTitle;
