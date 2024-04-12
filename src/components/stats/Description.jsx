import { cn } from '@/utils';

import { Text } from '../ui/text';

const StatsDescription = ({ className, ...props }) => {
  return (
    <Text
      className={cn(
        'ml-auto whitespace-pre-line text-end text-2xl/none font-medium uppercase tracking-tight sm:text-3xl/none',
        className,
      )}
      {...props}
    />
  );
};

export default StatsDescription;
