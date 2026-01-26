'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { RefObject, useRef } from 'react';

import { Bg, Box, Lines } from '@/components/atoms';
import { BgProps } from '@/components/atoms/Bg';
import { BoxProps } from '@/components/atoms/Box';
import { cn, setRefs } from '@/utils';

import Transition, { TransitionProps } from './Transition';
import useSetTheme from './useSetTheme';

type SectionOrganismOwnProps = {
  theme: Parameters<typeof useSetTheme>['1'];
  forceTheme?: Parameters<typeof useSetTheme>['2'];
  bgProps?: Partial<BgProps>;
  hasTransition?: boolean;
  transitionProps?: Partial<TransitionProps>;
};

type SectionOrganismProps = SectionOrganismOwnProps &
  Omit<BoxProps, keyof SectionOrganismOwnProps>;

const SectionOrganism = ({
  hasTransition = true,
  className,
  theme,
  children,
  forceTheme,
  bgProps,
  transitionProps,
  ref,
  ...props
}: SectionOrganismProps) => {
  const innerRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

  useSetTheme(innerRef, theme, forceTheme);

  return (
    <Box
      className={cn(
        `3xl:min-h-bounds relative flex min-h-svh w-full flex-col items-center py-(--section-spacing-md) [--section-spacing-lg:calc(var(--spacing-2xl)*2)] [--section-spacing-md:calc(var(--spacing-xl)+(var(--spacing-sm)))] [--section-spacing-sm:calc(var(--spacing-lg)+(var(--spacing-sm)))]`,
        hasTransition && 'pt-(--section-spacing-lg)',
        className
      )}
      component='section'
      data-has-transition={hasTransition}
      data-theme={theme}
      ref={setRefs(ref, innerRef)}
      {...props}
    >
      {children}

      {hasTransition && <Transition {...transitionProps} />}

      <Bg {...bgProps}>
        <Lines />
      </Bg>
    </Box>
  );
};

export default createPolymorphicComponent<'section', SectionOrganismProps>(
  SectionOrganism
);
export type { SectionOrganismProps };
