import { Section, SectionProps } from '@/components/layout/Section';
import { ScrollYLines } from '@/components/misc/Lines/ScrollY';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';

export const PrimaryHeroAnimation = {
  target: '[data-title]',
  from: {
    y: '0%',
    scale: 1,
    opacity: 1
  },
  to: {
    y: '150%',
    scale: 0.75,
    opacity: 0
  },
  start: 0
} satisfies AnimateOnScrollConfig;

export type PrimaryHeroProps = SectionProps;

export const PrimaryHero = ({ children, ...props }: PrimaryHeroProps) => {
  return (
    <AnimateOnScroll config={PrimaryHeroAnimation}>
      <Section
        forceTheme
        {...props}
      >
        {children}

        <ScrollYLines className='inset-x-[calc(var(--w)*-0.025)] top-0 bottom-[calc(var(--py)+(--spacing(32)))] bg-size-[83.333px_66.666px]' />

        {/* Used to hide title when it bypass the lines. */}
        <div className='absolute inset-x-0 bottom-(--py) h-32 bg-body' />
      </Section>
    </AnimateOnScroll>
  );
};
