'use client';

import { MergeProps } from '@/types/MergeProps';
import { AccordionRoot, AccordionRootProps } from '@ark-ui/react';
import { ScrollTrigger } from '@/hooks/useGSAP';
import { RefObject } from 'react';

export type AccordionProps = MergeProps<{ ref?: RefObject<HTMLDivElement> }, AccordionRootProps>;

export const Accordion = (props: AccordionProps) => {
  return (
    <AccordionRoot
      collapsible
      {...props}
      onTransitionEnd={(...args) => {
        ScrollTrigger.refresh();

        return props.onTransitionEnd?.(...args);
      }}
    />
  );
};
