'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setVariant } from '@/redux';
import { cn, isFunctionThanCall, setRefs } from '@/utils';

const CursorSticky = ({ className, element, ...props }, ref) => {
  const innerRef = useRef(null),
    dispatch = useDispatch();

  const resetCursor = () => dispatch(setVariant()),
    updateCursor = () => {
      const { left, top, width, height } = (
        element || innerRef
      ).current.getBoundingClientRect();

      const variant = {
        width,
        height,
        x: left,
        y: top,
        zIndex: 0,
      };

      dispatch(setVariant(variant));
    };

  const onMouseLeave = (ev) => {
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
        'duration-0 hover:border-transparent hover:bg-transparent hover:text-primary-content hover:[transition:color_0ms_100ms,background-color_0ms_100ms,border-color_0ms_100ms,]',
        className,
      )}
      ref={setRefs(ref, innerRef)}
      {...props}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    />
  );
};

export default forwardRef(CursorSticky);
