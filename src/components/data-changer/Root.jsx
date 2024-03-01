'use client';

import { forwardRef, useContext } from 'react';

import { DataChangerContext, DataChangerProvider } from '@/contexts';
import { isFunctionThanCall } from '@/utils';

const DataChanger = forwardRef((props, ref) => {
  const { setIsPaused } = useContext(DataChangerContext);

  return (
    <section
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

const DataChangerWithProvider = ({ lastIdx, duration, ...props }, ref) => {
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
