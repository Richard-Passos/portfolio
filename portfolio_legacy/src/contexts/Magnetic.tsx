'use client';

import { RefObject, createContext } from 'react';

type MagneticContextState = {
  container?: RefObject<HTMLElement | null>;
};

const MagneticContext = createContext<MagneticContextState>({});

export { MagneticContext };
export type { MagneticContextState };
