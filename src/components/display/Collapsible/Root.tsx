'use client';

import { MergeProps } from '@/types/MergeProps';
import { CollapsibleRoot, CollapsibleRootProps } from '@ark-ui/react';
import { ScrollTrigger } from '@/hooks/useGSAP';
import { RefObject } from 'react';

export type CollapsibleProps = MergeProps<
  { ref?: RefObject<HTMLDivElement> },
  CollapsibleRootProps
>;

export const Collapsible = (props: CollapsibleProps) => {
  return (
    <CollapsibleRoot
      {...props}
      onTransitionEnd={(...args) => {
        ScrollTrigger.refresh();

        return props.onTransitionEnd?.(...args);
      }}
    />
  );
};
