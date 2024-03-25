import { Lines } from '@/components';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Icon } from '@/components/ui';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

import HorizontalScroll from './HorizontalScroll';
import StatsChanger from './StatsChanger';
import Title from './Title';

const CONTACT_VIEW_HERO_SECTION_ICONS = ['Rocket', 'Smile', 'Globe'];

const ContactViewHeroSection = ({ className, ...props }) => {
  const animationConfig = {
    scrollConfig: {
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
        <div className='flex h-fit flex-col justify-between sm:pb-md'>
          <div className='relative mb-md flex w-full justify-center overflow-hidden border-b'>
            {CONTACT_VIEW_HERO_SECTION_ICONS.map((icon) => (
              <Icon
                className='aspect-square h-auto w-[33.333%] fill-muted first:-translate-x-full last:translate-x-full odd:absolute odd:bottom-0 odd:translate-y-[70%] even:-mb-[15%]'
                key={icon}
                name={icon}
              />
            ))}
          </div>

          <HorizontalScroll />

          <Text className='mb-sm max-w-xs text-muted-content'>
            Ready for lift-off? Ping, tweet, message or poke — and we will get
            back as soon as possible.
          </Text>

          <StatsChanger />
        </div>
        <ScrollAnimateTransform config={animationConfig}>
          <div className='relative z-10 aspect-[1/1.4] h-fit w-full rounded-3xl bg-red-500 shadow-md max-sm:hidden sm:-translate-y-[var(--y)*(theme(spacing.lg)*2.5)]' />
        </ScrollAnimateTransform>
      </div>

      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 transition-all dark:opacity-20' />
      <Lines />
    </section>
  );
};

export default ContactViewHeroSection;
export { CONTACT_VIEW_HERO_SECTION_ICONS };
