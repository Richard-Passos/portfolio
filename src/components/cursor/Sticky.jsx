'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setVariant } from '@/redux';
import { cn, isFunctionThanCall } from '@/utils';

const CursorSticky = ({ className, ...props }, ref) => {
  const innerRef = useRef(null),
    dispatch = useDispatch();

  const setRefs = (el) => {
      isFunctionThanCall(ref, el);

      innerRef.current = el;
    },
    onMouseLeave = (ev) => {
      isFunctionThanCall(props.onMouseLeave, ev);

      resetCursor(dispatch);
    },
    onMouseMove = (ev) => {
      isFunctionThanCall(props.onMouseMove, ev);

      updateCursor(innerRef, dispatch);
    };

  return (
    <Slot
      className={cn(
        'hover:text-primary-content duration-0 hover:border-transparent hover:bg-transparent hover:delay-100',
        className,
      )}
      ref={setRefs}
      {...props}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    />
  );
};

const updateCursor = (ref, dispatch) => {
  const { left, top, width, height } = ref.current.getBoundingClientRect();

  const variant = {
    width,
    height,
    x: left,
    y: top,
  };

  dispatch(setVariant({ variant }));
};

const resetCursor = (dispatch) => dispatch(setVariant({ variant: null }));

export default forwardRef(CursorSticky);
