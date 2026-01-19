'use client';

import { Anchor, AnchorProps } from '@mantine/core';

import UnstyledLink, { UnstyledLinkProps } from './Unstyled';

type LinkAtomOwnProps = {};

type LinkAtomProps = LinkAtomOwnProps &
  Omit<AnchorProps & UnstyledLinkProps, keyof LinkAtomOwnProps>;

const LinkAtom = (props: LinkAtomProps) => {
  return (
    <Anchor
      component={UnstyledLink}
      {...props}
    />
  );
};

export default LinkAtom;
export type { LinkAtomProps };
