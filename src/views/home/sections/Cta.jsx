import { Section, TextScrollAnimate } from '@/components';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Icon } from '@/components/ui';
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

      <div className='absolute inset-0 -z-10'>
        {data.icons?.map((data, i) => (
          <ScrollAnimateTransform
            key={data.src}
            config={ANIMATION_CONFIG[`rotate${i % 2 === 0 ? 1 : 2}`]}
          >
            <div className='absolute size-[min(50vmin,theme(maxWidth.md))] first:left-0 first:top-0 last:bottom-0 last:right-0'>
              <Icon
                className='size-full text-muted'
                {...data}
              />
            </div>
          </ScrollAnimateTransform>
        ))}
      </div>
    </Section>
  );
};

export default HomeViewCtaSection;
