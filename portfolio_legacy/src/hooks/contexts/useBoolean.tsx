import { useContext } from 'react';

import { BooleanContext } from '@/contexts';

const useBooleanContext = () => {
  const context = useContext(BooleanContext);

  if (context === undefined)
    throw new Error('useBooleanContext must be used within a BooleanProvider');

  return context;
};

export { useBooleanContext };
