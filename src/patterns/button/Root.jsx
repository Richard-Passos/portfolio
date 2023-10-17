import { forwardRef } from 'react';

import { Cursor, Magnetic } from '@/components';
import { Button as ButtonUi } from '@/components/ui';
import { cn } from '@/utils';

const Button = (
  { magneticProps, stickyProps, className, children, ...props },
  ref,
) => {
  return (
    <Magnetic {...{ ...magneticProps, limit: 0.25 }}>
      <Cursor.Sticky {...stickyProps}>
        <ButtonUi
          className={cn(
            'relative aspect-square h-40 rounded-full px-0 text-lg',
            className,
          )}
          ref={ref}
          {...props}
        >
          <Magnetic {...magneticProps}>
            <span className='flex h-full w-full items-center justify-center'>
              {children}
            </span>
          </Magnetic>
        </ButtonUi>
      </Cursor.Sticky>
    </Magnetic>
  );
};

export default forwardRef(Button);
