import { ComponentProps } from 'react';

import { Link } from '@/i18n/navigation';
import { isExternalUrl } from '@/utils';

type UnstyledLinkAtomOwnProps = {
  href: string;
  disabled?: boolean;
};

type UnstyledLinkAtomProps = UnstyledLinkAtomOwnProps &
  Omit<ComponentProps<typeof Link>, 'as' | keyof UnstyledLinkAtomOwnProps>;

const UnstyledLinkAtom = ({
  href,
  disabled,
  ...props
}: UnstyledLinkAtomProps) => {
  const isExternal = isExternalUrl(href);

  const externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  return (
    <Link
      aria-disabled={disabled}
      href={disabled ? '' : href}
      tabIndex={disabled ? -1 : 0}
      {...(isExternal && externalLinkProps)}
      {...props}
    />
  );
};

export default UnstyledLinkAtom;
export type { UnstyledLinkAtomProps };
