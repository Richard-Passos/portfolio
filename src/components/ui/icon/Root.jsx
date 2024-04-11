import { forwardRef } from 'react';
import Svg from 'react-inlinesvg';

import { cn } from '@/utils';

const Icon = ({ className, ...props }, ref) => {
  return (
      <Svg
      innerRef={ref}
      className={cn('size-8 *:fill-current', className)}
      {...props}
    />
  );
};

export default forwardRef(Icon);
