import { cn } from '@/utils';

import { Text } from '../ui/text';

const ServicesNumber = ({ className, idx, ...props }) => {
  return (
    <Text
      className={cn('text-xs font-semibold text-muted-content', className)}
      {...props}
    >
      · {`${idx + 1}`.padStart(2, '0')}
    </Text>
  );
};

export default ServicesNumber;
