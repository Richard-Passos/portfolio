import { ComponentProps } from 'react';

import { Link } from '@/i18n/navigation';
import { MergeProps } from '@/types';
import { isExternalUrl } from '@/utils';

type LinkBaseProps = MergeProps<
  {
    href: string;
    disabled?: boolean;
  },
  ComponentProps<typeof Link>,
  'as'
>;

const LinkBase = ({ href, disabled, ...props }: LinkBaseProps) => {
  const isExternal = isExternalUrl(href);

  return (
    <Link
      aria-disabled={disabled}
      href={disabled ? '' : href}
      tabIndex={disabled ? -1 : 0}
      {...(isExternal && { rel: 'noreferrer', target: '_blank' })}
      {...props}
    />
  );
};

export { LinkBase };
export type { LinkBaseProps };
