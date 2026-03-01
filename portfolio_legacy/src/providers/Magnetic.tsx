'use client';

import { ComponentProps, useMemo } from 'react';

import { MagneticContext, MagneticContextState } from '@/contexts';
import { MergeProps } from '@/types';

type MagneticProviderProps = MergeProps<
  Pick<MagneticContextState, 'container'>,
  ComponentProps<typeof MagneticContext.Provider>,
  'value'
>;

const MagneticProvider = ({ container, ...props }: MagneticProviderProps) => {
  const value = useMemo(() => ({ container }), [container]);

  return (
    <MagneticContext.Provider
      value={value}
      {...props}
    />
  );
};

export { MagneticProvider };
export type { MagneticProviderProps };
