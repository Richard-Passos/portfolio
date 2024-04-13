import { cn } from '@/utils';

import { Text } from '../ui/text';

const ValuesDescription = ({ className, ...props }) => {
  return (
    <Text
      className={cn('mt-2 text-muted-content first-letter:uppercase', className)}
      {...props}
    />
  );
};

export default ValuesDescription;
