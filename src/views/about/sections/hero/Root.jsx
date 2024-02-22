import { Lines } from '@/components';
import { Badge } from '@/components/ui';
import { TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

import IconChanger from './IconChanger';
import Images from './Images';

const AboutViewHeroSection = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center gap-lg py-lg',
        className,
      )}
      {...props}
    >
      <div className='w-9/10 max-w-screen-lg space-y-sm'>
        <TextTitle
          asChild
          className='max-sm:text-center'
          variants={{ size: 'lg' }}
        >
          <h1>
            Heart conquer
            <br />
            -ing{' '}
            <span className='relative inline'>
              person{' '}
              <Badge className='absolute bottom-0 right-0 -translate-x-4 -rotate-12 border-variant-content px-[1.5em] py-[.75em] text-[.17em] font-semibold normal-case tracking-normal'>
                Gotta know more
              </Badge>
            </span>
          </h1>
        </TextTitle>

        <div className='relative grid grid-cols-2 place-items-center'>
          <IconChanger />

          <span className='absolute h-px w-full bg-border transition-bg' />
        </div>
      </div>

      <Images />

      <Lines />
      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 transition-all dark:opacity-30' />
    </section>
  );
};

export default AboutViewHeroSection;
