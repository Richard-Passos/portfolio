import { Section, Values } from '@/components';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Badge, Icon, Text } from '@/components/ui';
import { cn } from '@/utils';

const ANIMATION_CONFIG = {
  rotate1: {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: 'rotate',
    propPoints: ['0deg', '-360deg'],
    transformConfig: { clamp: false },
  },
  rotate2: {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: 'rotate',
    propPoints: ['0deg', '360deg'],
    transformConfig: { clamp: false },
  },
};

const AboutViewValuesSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      className={cn('flex flex-col items-center justify-center', className)}
      {...props}
    >
      <Text.Title
        aria-label={data.title}
        className='w-9/10 max-w-screen-xl whitespace-pre-line text-[16vw]/none'
        variants={{ size: 'lg' }}
      >
        {data.title?.split(' ').map((w, i, arr) =>
          i === arr.length - 1 ? (
            <span
              key={i}
              className='relative inline'
            >
              {w}

              <Badge className='absolute bottom-0 right-0 w-max -translate-x-4 -rotate-12 border-variant-content px-[1em] py-[.75em] text-[.24em] lowercase tracking-normal first-letter:uppercase max-sm:translate-y-1/3 sm:text-[.17em]'>
                {data.subtitle}
              </Badge>
            </span>
          ) : (
            `${w} `
          ),
        )}
      </Text.Title>

      <span className='sr-only'>{data.subtitle}</span>

      <AboutViewValuesSectionBlock
        className='mt-md'
        data={data.block}
      />
    </Section>
  );
};

const AboutViewValuesSectionBlock = ({ className, data = {}, ...props }) => {
  return (
    <div
      className={cn('relative w-full', className)}
      {...props}
    >
      <Values className='mx-auto w-9/10 max-w-screen-xl'>
        {data.items?.map((data) => (
          <Values.Item key={data.title}>
            <Values.Icon>
              <Icon
                aria-hidden
                {...data.icon}
              />
            </Values.Icon>

            <Values.Title>{data.title}</Values.Title>

            <Values.Description>{data.description}</Values.Description>
          </Values.Item>
        ))}
      </Values>

      <div className='absolute inset-0 -z-10'>
        {data.icons?.map((data, i) => (
          <ScrollAnimateTransform
            key={data.src}
            config={ANIMATION_CONFIG[`rotate${i % 2 === 0 ? 1 : 2}`]}
          >
            <div className='absolute size-[min(50vmin,theme(maxWidth.md))] first:bottom-0 first:left-0 last:right-0 last:top-0 max-lg:hidden'>
              <Icon
                className='size-full text-muted'
                {...data}
              />
            </div>
          </ScrollAnimateTransform>
        ))}
      </div>
    </div>
  );
};

export default AboutViewValuesSection;
