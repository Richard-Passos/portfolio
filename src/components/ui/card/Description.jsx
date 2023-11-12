import { forwardRef } from 'react';

import { cn } from '@/utils';

import { Text } from '../text';

const CardDescription = ({ className, ...props }, ref) => {
  return (
    <Text
      className={cn('text-sm text-muted-content', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardDescription);
