'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setVariant } from '@/redux';
import { isFunctionThanCall } from '@/utils';

const CursorHover = ({ disabled, variant, ...props }, ref) => {
  const dispatch = useDispatch();

  const updateCursor = () => dispatch(setVariant(variant)),
    resetCursor = () => dispatch(setVariant());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => resetCursor, []);

  return (
    <Slot
      ref={ref}
      {...props}
      onMouseEnter={(ev) => {
        isFunctionThanCall(props.onMouseEnter, ev);

        !disabled && updateCursor();
      }}
      onMouseLeave={(ev) => {
        isFunctionThanCall(props.onMouseLeave, ev);

        !disabled && resetCursor();
      }}
    />
  );
};

export default forwardRef(CursorHover);
