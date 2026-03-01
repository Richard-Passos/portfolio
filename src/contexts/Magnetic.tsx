'use client';

import { useContext } from 'react';
import { RefObject, createContext } from 'react';
import { ComponentProps } from 'react';

import { MergeProps } from '@/types';

export type MagneticContextState = {
  container?: RefObject<HTMLElement | null>;
};

export const MagneticContext = createContext<MagneticContextState>({});

export type MagneticProviderProps = MergeProps<
  Pick<MagneticContextState, 'container'>,
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
