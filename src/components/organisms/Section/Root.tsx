'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { RefObject, useRef } from 'react';

import { Bg, Box, Lines } from '@/components/atoms';
import { BgProps } from '@/components/atoms/Bg';
import { BoxProps } from '@/components/atoms/Box';
import { cn, setRefs } from '@/utils';

import useSetTheme from './useSetTheme';

type SectionOrganismOwnProps = {
  theme: Parameters<typeof useSetTheme>['1'];
  forceTheme?: Parameters<typeof useSetTheme>['2'];
  bgProps?: Partial<BgProps>;
};

type SectionOrganismProps = SectionOrganismOwnProps &
  Omit<BoxProps, keyof SectionOrganismOwnProps>;

const SectionOrganism = ({
  className,
  theme,
  children,
  forceTheme,
  bgProps,
  ref,
  ...props
}: SectionOrganismProps) => {
  const innerRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

  useSetTheme(innerRef, theme, forceTheme);

  return (
    <Box
      component='section'
      data-theme={theme}
      ref={setRefs(ref, innerRef)}
      className={cn(
        '3xl:min-h-bounds relative flex min-h-svh w-full flex-col items-center justify-center py-[clamp(--spacing(24),4.5vw+2rem,--spacing(32))]',
        className
      )}
      {...props}
    >
      {children}

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
