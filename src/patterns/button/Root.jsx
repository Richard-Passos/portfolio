import { forwardRef } from 'react';

import { Cursor, Magnetic } from '@/components';
import { Button as ButtonUi } from '@/components/ui';
import { cn } from '@/utils';

const Button = ({ magneticProps, stickyProps, className, ...props }, ref) => {
  return (
    <Magnetic
      ref={ref}
      {...magneticProps}
    >
      <Cursor.Sticky {...stickyProps}>
        <ButtonUi
          className={cn('aspect-square h-40 px-0 text-lg', className)}
          {...props}
        />
      </Cursor.Sticky>
    </Magnetic>
  );
};

export default forwardRef(Button);
