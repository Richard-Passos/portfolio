'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setContent, setVariant } from '@/redux';
import { isFunctionThanCall } from '@/utils';

const CursorHover = ({ variant, content, disabled, ...props }, ref) => {
  const dispatch = useDispatch();

  const updateCursor = () => {
      dispatch(setVariant(variant));
      dispatch(setContent(content));
    },
    resetCursor = () => {
      dispatch(setVariant());
      dispatch(setContent());
    };

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
