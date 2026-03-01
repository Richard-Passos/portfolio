'use client';

import { ComponentProps } from 'react';

import { BooleanContext } from '@/contexts/Boolean';
import { useBoolean } from '@/hooks';
import { MergeProps } from '@/types';

type BooleanProviderProps = MergeProps<
  {
    defaultValue?: boolean;
  },
  ComponentProps<typeof BooleanContext.Provider>,
  'value'
>;

const BooleanProvider = ({
  defaultValue = false,
  ...props
}: BooleanProviderProps) => {
  const boolean = useBoolean(defaultValue);

  return (
    <BooleanContext.Provider
      value={boolean}
      {...props}
    />
  );
};

export { BooleanProvider };
export type { BooleanProviderProps };
