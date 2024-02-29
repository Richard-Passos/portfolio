'use client';

import { createContext } from 'react';

const ProgressContext = createContext({ value: 0, min: 0, max: 100 });

const ProgressProvider = ProgressContext.Provider;

export default ProgressContext;
export { ProgressProvider };
