import { Section } from '@/components';
import { Badge } from '@/components/ui';
import { Text, TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

import Grid from './Grid';

const ContactViewHeroSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      forceHeaderTheme
      className={cn('flex w-9/10 max-w-screen-lg flex-col items-center -mt-[--header-h] max-2xl:min-h-svh pt-[calc(theme(spacing.lg)+var(--header-h))]', className)}
      {...props}
    >
      <TextTitle
          asChild
          aria-label={data.title}
          className='whitespace-pre-line mr-auto'
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

      <Grid className='mt-md' data={data}/>

      <div className='bg-main absolute top-0 h-[--header-h] w-screen max-w-bounds'>
      <span className='absolute top-full h-px w-[95%] left-1/2 -translate-x-1/2 bg-border opacity-60 dark:opacity-20' />
      </div>
    </Section>
  );
};

export default ContactViewHeroSection;
