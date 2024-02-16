import { cn } from '@/utils';

import { Text } from '../ui/text';

const ServicesNumber = ({ className, index, ...props }) => {
  return (
    <Text
      className={cn('text-xs font-semibold text-muted-content', className)}
      {...props}
    >
      • {`${index + 1}`.padStart(2, '0')}
    </Text>
  );
};

export default ServicesNumber;
