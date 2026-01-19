'use client';

import { RefObject, createContext } from 'react';

type MagneticContextInitialState = {
  id: string;
  container?: RefObject<HTMLElement | null>;
};

const magneticContextDefaultValue: MagneticContextInitialState = {
  id: ''
};

const MagneticContext = createContext(magneticContextDefaultValue);

export default MagneticContext;
export { magneticContextDefaultValue };
export type { MagneticContextInitialState };
