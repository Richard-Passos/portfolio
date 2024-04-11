'use client';

import { forwardRef, useContext } from 'react';

import { DataChangerContext, DataChangerProvider } from '@/contexts';
import { isFunctionThanCall } from '@/utils';
import { Slot } from '@radix-ui/react-slot';

const DataChanger = forwardRef(({asChild, ...props}, ref) => {
  const { setIsPaused } = useContext(DataChangerContext);

  const Tag = asChild ? Slot : 'section'

  return (
    <Tag
      ref={ref}
      {...props}
      onMouseEnter={(ev) => {
        setIsPaused(true);

        isFunctionThanCall(props.onMouseEnter, ev);
      }}
      onMouseLeave={(ev) => {
        setIsPaused(false);

        isFunctionThanCall(props.onMouseLeave, ev);
      }}
    />
  );
});
DataChanger.displayName = 'DataChanger';

const DataChangerWithProvider = ({ duration, lastIdx, ...props }, ref) => {
  return (
    <DataChangerProvider
      duration={duration}
      lastIdx={lastIdx}
    >
      <DataChanger
        ref={ref}
        {...props}
      />
    </DataChangerProvider>
  );
};

export default forwardRef(DataChangerWithProvider);
