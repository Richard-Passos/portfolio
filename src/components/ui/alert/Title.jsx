import { forwardRef } from 'react';

import { cn } from '@/utils';

import { TextTitle } from '../text';

const AlertTitle = ({ className, ...props }, ref) => {
  return (
    <TextTitle
      className={cn('mb-1 text-base leading-none', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertTitle);
