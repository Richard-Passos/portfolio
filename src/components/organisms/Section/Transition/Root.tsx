'use client';

import { ComponentProps } from 'react';

import { Bg, Lines, ScrollAnimate } from '@/components/atoms';
import { BgProps } from '@/components/atoms/Bg';
import { LinesProps } from '@/components/atoms/Lines';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate/Root';
import { cn } from '@/utils';

const HEIGHT = 5, // rem
  INITIAL_RADIUS = '20%',
  FINAL_RADIUS = '50%';

const ANIMATION_CONFIG: Record<'y' | 'radius', ScrollAnimateConfigOptions> = {
  y: {
    scrollConfig: {
      offset: ['0 1', '0 0']
    },
    prop: '--y',
    propPoints: [`${HEIGHT}rem`, '0rem']
  },
  radius: {
    scrollConfig: {
      offset: ['1 1', '0 0']
    },
    prop: '--radius',
    propPoints: [INITIAL_RADIUS, FINAL_RADIUS]
  }
};

type SectionTransitionOrganismOwnProps = {
  reverse?: boolean;
  wrapperProps?: Partial<ComponentProps<'div'>>;
  bgProps?: Partial<BgProps>;
  linesProps?: Partial<LinesProps>;
};

type SectionTransitionOrganismProps = SectionTransitionOrganismOwnProps &
  Omit<ComponentProps<'div'>, keyof SectionTransitionOrganismOwnProps>;

const SectionTransitionOrganism = ({
  reverse,
  className,
  style,
  wrapperProps,
  bgProps,
  linesProps,
  ...props
}: SectionTransitionOrganismProps) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG.y}>
      <ScrollAnimate config={ANIMATION_CONFIG.radius}>
        <div
          className={cn(
            'pointer-events-none absolute top-0 z-10 h-(--height) w-screen',
            className
          )}
          style={
            {
              '--height': `${HEIGHT}rem`,
              '--initial-radius': INITIAL_RADIUS,
              '--final-radius': FINAL_RADIUS,
              ...style
            } as typeof style
          }
          {...props}
        >
          <div
            {...wrapperProps}
            className={cn(
              'relative size-full overflow-hidden',
              reverse ? '-top-px' : 'bottom-full translate-y-px',
              wrapperProps?.className
            )}
          >
            <Bg
              {...bgProps}
              className={cn(
                `pointer-events-auto -inset-x-[25%] z-0 aspect-[1/.25] size-auto`,
                reverse ? 'top-auto bottom-0' : 'top-0 bottom-auto',
                bgProps?.className
              )}
              style={{
                clipPath: reverse
                  ? 'inset(0 0 calc(var(--height) - var(--y)) 0 round calc(var(--initial-radius) + var(--final-radius) - var(--radius)))'
                  : 'inset(var(--y) 0 0 0 round var(--radius))',
                ...bgProps?.style
              }}
            >
              <Lines {...linesProps} />
            </Bg>
          </div>
        </div>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default SectionTransitionOrganism;
export type { SectionTransitionOrganismProps };
