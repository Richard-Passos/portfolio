import { Section } from '@/components';
import { Badge } from '@/components/ui';
import { Text, TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

import Grid from './Grid';

const ContactViewHeroSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      forceHeaderTheme
      className={cn(
        '-mt-[--header-h] flex w-9/10 max-w-screen-lg flex-col items-center pt-[calc(theme(spacing.lg)+var(--header-h))] min-h-svh',
        className,
      )}
      {...props}
    >
      <TextTitle
        asChild
        aria-label={data.title}
        className='mr-auto whitespace-pre-line'
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

      <Grid
        className='mt-md'
        data={data}
      />

      <div className='absolute top-0 h-[--header-h] w-screen max-w-bounds bg-main'>
        <span className='absolute left-1/2 top-full h-px w-[95%] -translate-x-1/2 bg-border opacity-60 dark:opacity-20' />
      </div>
    </Section>
  );
};

export default ContactViewHeroSection;
