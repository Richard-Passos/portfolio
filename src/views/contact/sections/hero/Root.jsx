import { Lines, LocalTime } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Text } from '@/components/ui/text';
import { personalInfo } from '@/constants';
import { cn } from '@/utils';

import HorizontalScroll from './HorizontalScroll';
import StatsChanger from './StatsChanger';
import Title from './Title';

const EXTRA_INFO = [
  {
    title: 'Availability',
    content: personalInfo.availabilityMessage,
  },
  {
    title: 'Local time',
    content: <LocalTime key='local-time' />,
  },
  {
    title: 'Location',
    content: `${personalInfo.location.country}, ${personalInfo.location.state}`,
  },
];

const ContactViewHeroSection = ({ className, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['0 1', '0 0'],
    },
    prop: '--y',
    propPoints: [1, 0],
  };

  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center py-lg',
        className,
      )}
      {...props}
    >
      <Title />

      <div className='relative grid w-9/10 max-w-screen-lg items-end gap-md sm:grid-cols-2'>
        <div className='flex h-fit flex-col justify-between sm:py-md'>
          <HorizontalScroll />

          <Text className='mb-sm max-w-xs text-muted-content'>
            Ready for lift-off? Ping, tweet, message or poke — and we will get
            back as soon as possible.
          </Text>

          <StatsChanger />

          <ul className='grid w-full gap-sm lg:grid-cols-3'>
            {EXTRA_INFO.map(({ title, content }) => (
              <li
                className='rounded-sm border bg-main p-4'
                key={title}
              >
                <Text.Title className='mb-1.5 text-xs uppercase text-muted-content'>
                  {title}
                </Text.Title>

                <Text className='text-sm'>{content}</Text>
              </li>
            ))}
          </ul>
        </div>
        <ScrollAnimationTransform config={animationConfig}>
          <div className='relative z-10 aspect-[1/1.4] h-fit w-full rounded-3xl bg-red-500 shadow-md max-sm:hidden sm:-translate-y-[var(--y)*(theme(spacing.lg)*2.5)]' />
        </ScrollAnimationTransform>
      </div>

      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 transition-all dark:opacity-20' />
      <Lines />
    </section>
  );
};

export default ContactViewHeroSection;
