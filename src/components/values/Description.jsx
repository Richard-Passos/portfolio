import { cn } from '@/utils';

import { Text } from '../ui/text';

const ValuesDescription = ({ className, ...props }) => {
  return (
    <Text
      className={cn('text-muted-content', className)}
      {...props}
    />
  );
};

export default ValuesDescription;
