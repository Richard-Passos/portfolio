import { forwardRef } from 'react';

import { cn } from '@/utils';

import { TextSubtitle } from '../text';

const CardTitle = ({ className, ...props }, ref) => {
  return (
    <TextSubtitle
      className={cn('text-2xl leading-none tracking-tight', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardTitle);
