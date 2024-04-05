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
      className={cn('flex flex-col items-center gap-lg', className)}
      {...props}
    >
      <div className='w-9/10 max-w-screen-lg space-y-sm'>
        <TextTitle
          asChild
          aria-label={data.title}
          className='whitespace-pre-line max-sm:text-center'
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

                  <Badge className='absolute bottom-0 right-0 -translate-x-4 -rotate-12 border-variant-content px-[1.5em] py-[.75em] text-[.17em] font-semibold normal-case tracking-normal'>
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

        <div className='relative grid grid-cols-2 place-items-center'>
          <IconChanger data={data.icons} />

          <span className='absolute h-px w-full bg-border transition-bg' />
        </div>
      </div>

      <Images data={data.images} />

      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 transition-all dark:opacity-30' />
    </Section>
  );
};

export default AboutViewHeroSection;
