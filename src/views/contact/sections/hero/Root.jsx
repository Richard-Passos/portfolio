import { ScrollAnimate, Section } from '@/components';
import { Badge, Icon, Image } from '@/components/ui';
import { Text, TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

import HorizontalScroll from './HorizontalScroll';
import StatsChanger from './StatsChanger';

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
  return (
    <Section
      hasTransition={false}
      forceHeaderTheme
      className={cn('flex flex-col items-center', className)}
      {...props}
    >
      <div className='w-9/10 grid sm:grid-cols-2 gap-md max-w-screen-lg'>
      <TextTitle
          asChild
          aria-label={data.title}
          className='whitespace-pre-line col-span-full'
          variants={{ size: 'lg' }}
        >
          <h1>
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
          </h1>
        </TextTitle>

          <div>
           <div className='relative flex w-full mt-md max-w-xs justify-center overflow-hidden border-b'>
            {data.icons?.map((icon) => (
              <Icon
                className='aspect-square h-auto w-[33.333%] text-muted first:-translate-x-full last:translate-x-full odd:absolute odd:bottom-0 odd:translate-y-[70%] even:-mb-[15%]'
                key={icon.src}
                {...icon}
              />
            ))}
          </div>
          
          <Text className='mt-sm max-w-xs text-muted-content'>
            {data.description}
          </Text>
          </div>

          <StatsChanger />
        </div>

      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 dark:opacity-20' />
    </Section>
  );
};

export default ContactViewHeroSection;
