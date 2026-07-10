'use client';

import { useContext, ComponentProps, type RefObject, createContext } from 'react';

import { MergeProps } from '@/types/MergeProps';

export type MagneticContextState = {
  container?: RefObject<HTMLElement | null>;
};

export const MagneticContext = createContext<MagneticContextState>({});

export type MagneticProviderProps = MergeProps<
  MagneticContextState,
  ComponentProps<typeof MagneticContext.Provider>,
  'value'
>;

export const MagneticProvider = ({ container, ...props }: MagneticProviderProps) => {
  return (
    <MagneticContext.Provider
      value={{ container }}
      {...props}
    />
  );
};

export const useMagneticContext = () => useContext(MagneticContext);
