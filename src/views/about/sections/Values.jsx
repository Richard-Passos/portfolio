import { Section, Values } from '@/components';
import { ScrollAnimate, ScrollAnimateTransform } from '@/components/scroll-animate';
import { Badge, Icon, Text } from '@/components/ui';
import { GlobeIcon, SmileIcon } from '@/components/ui/icon/icons';
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
  }
}

const AboutViewValuesSection = ({ className, data = {}, ...props }) => {
  

  return (
      <Section
        className={cn('flex flex-col items-center', className)}
        {...props}
      >
        <Text.Title
          aria-label={data.tile}
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

                  <Badge className='absolute bottom-0 right-0 -translate-x-4 -rotate-12 border-variant-content px-[1.5em] py-[.75em] text-[.17em] first-letter:uppercase lowercase tracking-normal'>
                    {data.subtitle}
                  </Badge>
                </span>
              ) : (
                `${w} `
              ),
            )}
        </Text.Title>

        <span className='sr-only'>{data.subtitle}</span>

        <div className='relative w-full mt-md'>
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

          <ScrollAnimateTransform config={ANIMATION_CONFIG.rotate1}>
          <GlobeIcon
            aria-hidden
            className='absolute right-0 top-0 -z-10 size-[min(50vmin,theme(maxWidth.md))] text-muted max-lg:hidden'
          />
          </ScrollAnimateTransform>

          <ScrollAnimateTransform config={ANIMATION_CONFIG.rotate2}>
          <SmileIcon
            aria-hidden
            className='absolute bottom-0 left-0 -z-10 size-[min(50vmin,theme(maxWidth.md))] text-muted max-lg:hidden'
            />
            </ScrollAnimateTransform>
        </div>
      </Section>
  );
};

export default AboutViewValuesSection;
