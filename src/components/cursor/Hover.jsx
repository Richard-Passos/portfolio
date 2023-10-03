'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';

import { setVariant } from '@/redux';

const CursorHover = ({ disabled, variant, children, ...props }, ref) => {
  const dispatch = useDispatch();

  return !disabled ? (
    <Slot
      onMouseEnter={() => dispatch(setVariant({ variant }))}
      onMouseLeave={() => dispatch(setVariant({ variant: null }))}
      ref={ref}
      {...props}
    >
      {children}
    </Slot>
  ) : (
    <>{children}</>
  );
};

export default forwardRef(CursorHover);
