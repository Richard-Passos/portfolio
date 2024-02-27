import { Lines } from '@/components';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

import HorizontalScroll from './HorizontalScroll';
import StatsChanger from './StatsChanger';
import Title from './Title';

const ContactViewHeroSection = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center py-lg',
        className,
      )}
      {...props}
    >
      <Title />

      <div className='relative flex w-9/10 max-w-screen-lg justify-between gap-md'>
        <div className='flex grow flex-col justify-between pt-lg'>
          <StatsChanger />

          <div>
            <HorizontalScroll />

            <Text className='ml-md max-w-xs pb-md text-muted-content'>
              Ready for lift-off? Ping, tweet, message or poke — and we will get
              back as soon as possible.
            </Text>
          </div>
        </div>

        <div className='relative z-10 aspect-[1/1.4] w-full max-w-md rounded-3xl bg-red-500' />
      </div>

      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 transition-all dark:opacity-20' />
      <Lines />
    </section>
  );
};

export default ContactViewHeroSection;
