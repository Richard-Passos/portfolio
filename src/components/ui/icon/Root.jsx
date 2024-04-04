import { cn } from '@/utils';
import { forwardRef } from 'react';

import Svg from 'react-inlinesvg';


const Icon = ({className, ...props}, ref) => {
  return (
    <Svg
    className={cn('size-8 *:fill-current', className)}
       ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Icon);
