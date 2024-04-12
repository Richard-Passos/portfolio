import { BentoGrid, Section } from '@/components';
import { Badge } from '@/components/ui';
import { TextTitle } from '@/components/ui/text';
import { capitalize, cn } from '@/utils';

const ContactViewHeroSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      forceHeaderTheme
      className={cn(
        '-mt-[--header-h] flex min-h-svh w-9/10 max-w-screen-lg flex-col items-center pt-[calc(theme(spacing.lg)+var(--header-h))]',
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

      <ContactViewHeroSectionGrid
        className='mt-md'
        data={data.grid}
      />

      <div className='absolute top-0 h-[--header-h] w-screen max-w-bounds bg-main'>
        <span className='absolute left-1/2 top-full h-px w-[95%] -translate-x-1/2 bg-border opacity-60 dark:opacity-20' />
      </div>
    </Section>
  );
};

const ContactViewHeroSectionGrid = ({ data = {}, style, ...props }) => {
  return (
    <BentoGrid
      style={{
        ...Object.entries(data.templates)?.reduce(
          (obj, [key, val]) => ({
            ...obj,
            [`--${key.toLowerCase()}-template`]: val,
          }),
          {},
        ),
        ...style,
      }}
      {...props}
    >
      {data.items?.map(({ type = '', data }, i) => {
        const Item =
          BentoGrid.Item[type.split(/[_-]/g).map(capitalize).join('')] ||
          BentoGrid.Item;

        return (
          <Item
            key={i}
            idx={i}
            data={data}
          />
        );
      })}
    </BentoGrid>
  );
};

export default ContactViewHeroSection;
