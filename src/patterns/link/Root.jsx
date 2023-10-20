'use client';

import { useRef } from 'react';

import { Cursor } from '@/components';
import { Link as LinkUi } from '@/components/ui';
import { cn } from '@/utils';

const Link = ({ className, children, ...props }) => {
  const stickyElement = useRef(null);

  return (
    <Cursor.Sticky
      className='hover:text-primary'
      element={stickyElement}
    >
      <LinkUi
        className={cn('relative', className)}
        {...props}
      >
        {children}

        <span
          className='absolute bottom-0 aspect-square w-[.3em] translate-y-[250%] rounded-full text-main focus-visible:outline-none'
          ref={stickyElement}
        />
      </LinkUi>
    </Cursor.Sticky>
  );
};

export default Link;
