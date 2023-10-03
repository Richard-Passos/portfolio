import Link from 'next/link';

import { cn, isExternalUrl } from '@/utils';

const Root = ({ href = '#', className, ...props }) => {
  const isExternal = isExternalUrl(href);

  props = {
    href,
    className: cn('cursor-pointer', className),
    ...props,
  };

  return isExternal ? (
    <a
      rel='noreferrer'
      target='_blank'
      {...props}
    />
  ) : (
    <Link {...props} />
  );
};

export default Root;
