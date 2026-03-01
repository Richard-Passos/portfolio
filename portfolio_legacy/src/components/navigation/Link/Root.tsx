'use client';

import { Anchor, AnchorProps } from '@mantine/core';

import { MergeProps } from '@/types';

import { LinkBase, LinkBaseProps } from './Base';

type LinkRootProps = MergeProps<AnchorProps, LinkBaseProps>;

const LinkRoot = (props: LinkRootProps) => {
  return (
    <Anchor
      component={LinkBase}
      {...props}
    />
  );
};

export { LinkRoot };
export type { LinkRootProps };
