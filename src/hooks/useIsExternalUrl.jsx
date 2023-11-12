import { useEffect, useState } from 'react';

import { isExternalUrl } from '@/utils';

const useIsExternalUrl = (url) => {
  const [isExternal, setIsExternal] = useState(false);

  useEffect(() => {
    setIsExternal(isExternalUrl(url));
  }, [url]);

  return isExternal;
};

export default useIsExternalUrl;
