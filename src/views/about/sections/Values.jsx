import { BentoGrid, Section } from '@/components';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Badge, Icon, Text } from '@/components/ui';
import { cn, normTemplates } from '@/utils';

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

      <div className='mt-md w-full relative flex items-center justify-center'>
      <AboutViewValuesSectionGrid
        data={data.grid}
      />

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
    </Section>
  );
};

const AboutViewValuesSectionGrid = ({ className, data = {}, style, ...props }) => {
  return (
    <BentoGrid
      className={cn('w-9/10 max-w-screen-xl gap-sm', className)}
      style={{
        ...normTemplates(data.templates),
        ...style,
      }}
      {...props}
    >
      {data.items?.map((data, i) => 
              <BentoGrid.Item.Value
                key={data.title}
                idx={i}
                data={data}
              />
        )}
    </BentoGrid>
  );
};

export default AboutViewValuesSection;
