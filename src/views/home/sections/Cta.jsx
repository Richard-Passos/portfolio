import { Section, TextScrollAnimate } from '@/components';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { GlobeIcon, SmileIcon } from '@/components/ui/icon/icons';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const ANIMATION_CONFIG = {
  rotate1: {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: 'rotate',
    propPoints: ['0deg', '360deg'],
    transformConfig: { clamp: false },
  },
  rotate2: {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: 'rotate',
    propPoints: ['0deg', '-360deg'],
    transformConfig: { clamp: false },
  },
};

const HomeViewCtaSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <Text className='relative z-10 w-9/10 max-w-screen-lg text-center text-4xl/tight font-semibold md:text-5xl/tight'>
        <TextScrollAnimate text={data.description} />
      </Text>

      <ScrollAnimateTransform config={ANIMATION_CONFIG.rotate1}>
        <SmileIcon className='absolute left-0 top-0 size-[min(50vmin,theme(maxWidth.md))] -translate-x-1/2 text-muted' />
      </ScrollAnimateTransform>

      <ScrollAnimateTransform config={ANIMATION_CONFIG.rotate2}>
        <GlobeIcon className='absolute bottom-0 right-0 size-[min(50vmin,theme(maxWidth.md))] translate-x-1/2 text-muted' />
      </ScrollAnimateTransform>
    </Section>
  );
};

export default HomeViewCtaSection;
