import { Section } from '@/components';
import { Badge } from '@/components/ui';
import { TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

import IconChanger from './IconChanger';
import Images from './Images';

const AboutViewHeroSection = ({ className, data, ...props }) => {
  return (
    <Section
      forceHeaderTheme
      className={cn('flex flex-col items-center', className)}
      {...props}
    >
      <div className='w-9/10 max-w-screen-lg'>
        <TextTitle
          asChild
          aria-label={data.title}
          className='whitespace-pre-line'
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

        <span className='sr-only'>{data.subtitle}</span>

        <div className='relative mt-sm grid grid-cols-2 place-items-center'>
          <IconChanger data={data.icons} />

          <span className='absolute h-px w-full bg-border' />
        </div>
      </div>

      <Images
        className='mt-lg'
        data={data.images}
      />

      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 dark:opacity-20' />
    </Section>
  );
};

export default AboutViewHeroSection;
