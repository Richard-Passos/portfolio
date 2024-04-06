import { ScrollAnimate, Section } from '@/components';
import { Icon, Image } from '@/components/ui';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

import HorizontalScroll from './HorizontalScroll';
import StatsChanger from './StatsChanger';
import Title from './Title';

const ANIMATION_CONFIG = {
  y1: {
    scrollConfig: {
      offset: ['0 1', '0 0'],
    },
    prop: '--y',
    propPoints: [1, 0],
  },
  y2: {
    prop: 'y',
    propPoints: ['-13%', '0%'],
  },
};

const ContactViewHeroSection = ({ className, data = {}, ...props }) => {
  const { block = {} } = data;

  return (
    <Section
      hasTransition={false}
      forceHeaderTheme
      className={cn('flex flex-col items-center', className)}
      {...props}
    >
      <Title
        className='z-20'
        data={data}
      />

      <div className='relative mt-lg grid w-9/10 max-w-screen-lg items-end gap-md sm:grid-cols-2'>
        <div className='flex h-fit flex-col justify-between sm:pb-md'>
          <div className='relative flex w-full justify-center overflow-hidden border-b'>
            {block.icons?.map((icon) => (
              <Icon
                className='aspect-square h-auto w-[33.333%] text-muted first:-translate-x-full last:translate-x-full odd:absolute odd:bottom-0 odd:translate-y-[70%] even:-mb-[15%]'
                key={icon.src}
                {...icon}
              />
            ))}
          </div>

          <HorizontalScroll
            text={block.title}
            className='mt-md'
          />

          <Text className='mt-md max-w-xs text-muted-content'>
            {block.description}
          </Text>

          <StatsChanger className='mt-sm' />
        </div>

        <ScrollAnimate config={ANIMATION_CONFIG.y1}>
          <div className='relative z-10 aspect-[1/1.4] h-fit w-full overflow-hidden rounded-3xl bg-muted shadow-md max-sm:hidden sm:-translate-y-[var(--y)*(theme(spacing.lg)*2.5)]'>
            <ScrollAnimate.Transform config={ANIMATION_CONFIG.y2}>
              <Image
                className='h-[115%] w-full object-cover'
                {...block.image}
              />
            </ScrollAnimate.Transform>
          </div>
        </ScrollAnimate>
      </div>

      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 dark:opacity-20' />
    </Section>
  );
};

export default ContactViewHeroSection;
