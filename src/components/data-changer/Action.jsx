'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useContext } from 'react';

import { DataChangerContext } from '@/contexts';
import { isFunctionThanCall } from '@/utils';

const DataChangerAction = ({ asChild, ...props }, ref) => {
  const { setIsPaused, handleSetAciveIdx, resetTimer } =
    useContext(DataChangerContext);

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      ref={ref}
      {...props}
      onBlur={(ev) => {
        setIsPaused(false);

        isFunctionThanCall(props.onBlur, ev);
      }}
      onClick={(ev) => {
        handleSetAciveIdx();
        resetTimer();

        isFunctionThanCall(props.onCLick, ev);
      }}
      onFocus={(ev) => {
        setIsPaused(true);

        isFunctionThanCall(props.onFocus, ev);
      }}
    />
  );
};

export default forwardRef(DataChangerAction);
