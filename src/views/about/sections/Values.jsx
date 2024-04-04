import { Section, Values } from '@/components';
import { ScrollAnimate } from '@/components/scroll-animate';
import { Badge, Icon, Text } from '@/components/ui';
import { GlobeIcon, SmileIcon } from '@/components/ui/icon/icons';
import { values } from '@/constants';
import { cn } from '@/utils';

const AboutViewValuesSection = ({  className, data={}, ...props }) => {
  const animationConfig = {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: '--rotate',
    propPoints: ['0deg', '360deg'],
    transformConfig: { clamp: false },
  };

  return (
    <ScrollAnimate config={animationConfig}>
      <Section
        className={cn(
          'flex flex-col items-center gap-md',
          className,
        )}
        {...props}
      >
        <Text.Title
        aria-label={data.tile}
          className='w-9/10 max-w-screen-xl whitespace-pre-line text-7xl font-extrabold uppercase tracking-tight sm:text-8xl'
          id='carousel-skills-heading-0'
        >
          {data.title?.split(' ').map((w, i, arr) => i === arr.length - 1 ?  <span className='relative inline'>
            {w}

            <Badge className='absolute bottom-0 right-0 -translate-x-4 -rotate-12 border-variant-content px-[1.5em] py-[.75em] text-[.17em] font-semibold normal-case tracking-normal'>
              {data.subtitle}
            </Badge>
          </span>: `${w} `)}
        </Text.Title>

        <span className='sr-only'>{data.subtitle}</span>

        <div className='relative w-full'>
          <Values className='mx-auto w-9/10 max-w-screen-xl'>
            {data.items?.map((data) => (
              <Values.Item key={data.title}>
                <Values.Icon>
                  <Icon aria-hidden {...data.icon} />
                </Values.Icon>

                <Values.Title>{data.title}</Values.Title>

                <Values.Description>{data.description}</Values.Description>
              </Values.Item>
            ))}
          </Values>

          <GlobeIcon
            aria-hidden
            className='absolute right-0 top-0 -z-10 size-[min(50vmin,theme(maxWidth.md))] -rotate-[--rotate] fill-muted max-lg:hidden'
          />

          <SmileIcon
            aria-hidden
            className='absolute bottom-0 left-0 -z-10 size-[min(50vmin,theme(maxWidth.md))] rotate-[--rotate] fill-muted max-lg:hidden'
          />
        </div>
      </Section>
    </ScrollAnimate>
  );
};

export default AboutViewValuesSection;
