'use client';

import { Root } from '@radix-ui/react-portal';
import { forwardRef, useEffect, useState } from 'react';

const Portal = (props, ref) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <Root
        ref={ref}
        {...props}
      />
    )
  );
};

export default forwardRef(Portal);
