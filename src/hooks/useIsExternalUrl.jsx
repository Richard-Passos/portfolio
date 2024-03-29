'use client';

import { useEffect, useState } from 'react';

import { isExternalUrl } from '@/utils';

const useIsExternalUrl = (url) => {
  const [isExternal, setIsExternal] = useState(false);

  useEffect(() => {
    url && setIsExternal(isExternalUrl(url));
  }, [url]);

  return isExternal;
};

export default useIsExternalUrl;
