import { forwardRef } from 'react';

import { cn } from '@/utils';

import { Text } from '../text';

const AlertDescription = ({ className, ...props }, ref) => {
  return (
    <Text
      className={cn('text-sm leading-relaxed', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDescription);
