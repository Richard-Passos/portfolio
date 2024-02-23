import { Section, Values } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Badge, Icon, Text } from '@/components/ui';
import { GlobeIcon, SmileIcon } from '@/components/ui/icon/icons';
import { values } from '@/constants';
import { cn } from '@/utils';

const WorkViewValuesSection = ({ className, ...props }) => {
  const animationConfig = {
    useScrollRes: 'scrollY',
    prop: '--rotate',
    scrollPoints: [0, 400],
    propPoints: ['0deg', '360deg'],
    useTransformConfig: { clamp: false },
  };

  return (
    <ScrollAnimationTransform config={animationConfig}>
      <Section
        className={cn('flex w-full flex-col items-center gap-md', className)}
        {...props}
      >
        <Text.Title
          className='w-9/10 max-w-screen-xl text-7xl font-extrabold uppercase tracking-tight sm:text-8xl'
          id='carousel-skills-heading-0'
        >
          My <br />{' '}
          <span className='relative inline'>
            values{' '}
            <Badge className='absolute bottom-0 right-0 -translate-x-4 -rotate-12 border-variant-content px-[1.5em] py-[.75em] text-[.17em] font-semibold normal-case tracking-normal'>
              Always improving
            </Badge>
          </span>
        </Text.Title>

        <div className='relative w-full'>
          <Values className='mx-auto w-9/10 max-w-screen-xl'>
            {values.map(({ icon, title, description }) => (
              <Values.Item key={title}>
                <Values.Icon>
                  <Icon name={icon} />
                </Values.Icon>

                <Values.Title>{title}</Values.Title>

                <Values.Description>{description}</Values.Description>
              </Values.Item>
            ))}
          </Values>

          <SmileIcon
            aria-hidden
            className='absolute right-0 top-0 -z-10 size-[min(50vmin,theme(maxWidth.md))] -rotate-[--rotate] opacity-10 dark:opacity-5 max-lg:hidden'
          />

          <GlobeIcon
            aria-hidden
            className='absolute bottom-0 left-0 -z-10 size-[min(50vmin,theme(maxWidth.md))] rotate-[--rotate] opacity-10 dark:opacity-5 max-lg:hidden'
          />
        </div>
      </Section>
    </ScrollAnimationTransform>
  );
};

export default WorkViewValuesSection;
