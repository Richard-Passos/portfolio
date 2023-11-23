'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setContent, setVariant } from '@/redux';
import { isFunctionThanCall } from '@/utils';

const CursorHover = ({ disabled, variant, content, ...props }, ref) => {
  const dispatch = useDispatch();

  const updateCursor = () => {
      if (!disabled) {
        dispatch(setVariant(variant));
        dispatch(setContent(content));
      }
    },
    resetCursor = () => {
      if (!disabled) {
        dispatch(setVariant());
        dispatch(setContent());
      }
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => resetCursor, []);

  return (
    <Slot
      ref={ref}
      {...props}
      onMouseEnter={(ev) => {
        updateCursor();

        isFunctionThanCall(props.onMouseEnter, ev);
      }}
      onMouseLeave={(ev) => {
        resetCursor();

        isFunctionThanCall(props.onMouseLeave, ev);
      }}
    />
  );
};

export default forwardRef(CursorHover);
