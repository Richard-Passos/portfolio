'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setVariant } from '@/redux';
import { cn, isFunctionThanCall } from '@/utils';

const CursorSticky = ({ className, element, variant, ...props }, ref) => {
  const innerRef = useRef(null),
    dispatch = useDispatch();

  const updateCursor = () => {
      const { left, top, width, height } = (
        element || innerRef
      ).current.getBoundingClientRect();

      variant = {
        width,
        height,
        x: left,
        y: top,
        zIndex: -1,
        ...variant,
      };

      dispatch(setVariant(variant));
    },
    resetCursor = () => dispatch(setVariant());

  const setRefs = (el) => {
      isFunctionThanCall(ref, el);

      innerRef.current = el;
    },
    onMouseLeave = (ev) => {
      isFunctionThanCall(props.onMouseLeave, ev);

      resetCursor();
    },
    onMouseMove = (ev) => {
      isFunctionThanCall(props.onMouseMove, ev);

      updateCursor();
    };

  return (
    <Slot
      className={cn(
        'transform hover:border-transparent hover:bg-transparent hover:text-primary-content hover:[transition:color_0ms_100ms,background-color_0ms_100ms,border-color_0ms_100ms,]',
        className,
      )}
      ref={setRefs}
      {...props}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    />
  );
};

export default forwardRef(CursorSticky);
